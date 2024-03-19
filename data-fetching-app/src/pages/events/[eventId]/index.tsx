import { CustomDiv } from "@/components/CustomDiv"
import { inter } from "@/fonts"
import { Event } from "@/types/Event"

interface Props
{
    event: Event
}

export default function Event({event}: Props)
{
    return (
        <CustomDiv className={inter.className}>
            <p>Id: {event.id}</p>
            <p>Title: {event.title}</p>
            <p>Description: {event.description}</p>
            <p>Type: {event.type}</p>
        </CustomDiv>
    )
}


export async function getServerSideProps({params}: any)
{
    const {eventId} = params

    const response = await fetch(`http://localhost:4000/events/${eventId}`)
    const event = await response.json()

    return {
        props: {
            event: event
        }
    }
}