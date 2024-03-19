import { CustomDiv } from "@/components/CustomDiv";
import { inter } from "@/fonts";
import { Event } from "@/types/Event";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";


interface Props {
    events: Event[]
}

export default function Events({ events }: Props) {
    const [eventsData, setEventsData] = useState<Event[]>(events);
    const router = useRouter()

    const fetchAll = async () => {
        const response = await fetch("http://localhost:4000/events")
        const events = await response.json()
        setEventsData(events)
    }
    
    const fetchHolidayEvents = async () => {
        const response = await fetch("http://localhost:4000/events?type=holiday")
        const events = await response.json()
        setEventsData(events)
        router.push('/events?type=holiday', undefined, { shallow: true })
    }

    const fetchCharityEvents = async () => {
        const response = await fetch("http://localhost:4000/events?type=charity")
        const events = await response.json()
        setEventsData(events)
        router.push('/events?type=charity', undefined, { shallow: true })
    }

    const fetchNetworkingEvents = async () => {
        const response = await fetch("http://localhost:4000/events?type=networking")
        const events = await response.json()
        setEventsData(events)
        router.push('/events?type=networking', undefined, { shallow: true })
    }

    return (
        <CustomDiv>
            <div>
                <button onClick={fetchAll}>Show All</button>
                <button onClick={fetchHolidayEvents}>Holiday events</button>
                <button onClick={fetchCharityEvents}>Charity events</button>
                <button onClick={fetchNetworkingEvents}>Networking events</button>
            </div>
            {eventsData.map((event) =>
            (
                <CustomDiv key={event.id} className={inter.className}>
                    <Link href={`/events/${event.id}`}>{event.title}</Link>
                </CustomDiv>
            ))}
        </CustomDiv>
    )
}


export async function getServerSideProps({ query }: any) {
    const {type} = query
    const response = await fetch(type ? `http://localhost:4000/events?type=${type}`:'http://localhost:4000/events' )
    const events = await response.json()


    return {
        props:
        {
            events: events
        }
    }


}