'use client'

import { CustomButton } from "@/components/CustomButton";
import { CustomDiv } from "@/components/CustomDiv";
import { inter } from "@/fonts";
import { Event } from "@/types/Event";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { events } from "../../../data/events";



export default function Events() {
    const router = useRouter()
    const [eventsData, setEventsData] = useState<Event[]>([])

    useEffect(() => {
        const fetchData = async () => {
            let response = await fetch(`/events/api`)

            let events = await response.json()
            setEventsData(events)
        }
        fetchData()
    }, [events])


    const handleNavigateToAddEvent = () => {
        router.push("/events/add")
    }


    return (
        <CustomDiv style={{ padding: 10 }} className={inter.className}>
            <CustomDiv >
                <CustomButton onClick={handleNavigateToAddEvent}>Add event</CustomButton>
            </CustomDiv>
            {eventsData.map((event) =>
            (
                <CustomDiv key={event.id}>
                    <Link href={`/events/${event.id}`}>{event.title}</Link>
                </CustomDiv>
            ))}
        </CustomDiv>
    )
}

