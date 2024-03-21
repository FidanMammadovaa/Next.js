'use client'


import { CustomButton } from "@/components/CustomButton"
import { CustomDiv } from "@/components/CustomDiv"
import { CustomInput } from "@/components/CustomInput"
import { inter } from "@/fonts"
import { Event } from "@/types/Event"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { events } from "../../../../data/events"

interface Props {
    params:
    {
        eventId: string
    }
}

export default function Event({ params }: Props) {

    const router = useRouter()
    const { eventId } = params
    const [eventData, setEventData] = useState<Event>({ id: -1, title: "", description: "" })

    useEffect(() => {
        let event = events.find((event) => event.id === Number(eventId))
        if (event) {

            setEventData(event)
        }
    }, [params.eventId])

    const eventIndex = events.findIndex(event => event.id === Number(eventId))
    const handleChangeTitle = (title: string) => {
        setEventData(prev => (
            { ...prev, title: title }
        ))
    }
    const handleChangeDescription = (description: string) => {
        setEventData(prev => (
            { ...prev, description: description }
        ))
    }

    const updateEvent = async () => {
        if (eventData.title && eventData.description) {

            events[eventIndex] = eventData
        }
        else {
            alert("Fields can't empty")
        }
    }

    const deleteEvent = async () => {
        
        events.splice(eventIndex, 1)
        handleGoBack()
    }
    
    const handleGoBack = () => 
    {
        router.back()
    }
    return (
        <CustomDiv style={{ padding: 10 }} className={inter.className}>
            <CustomButton onClick={handleGoBack}>Go Back</CustomButton>
            <p>Id: {eventData.id}</p>
            <p>Title: </p>
            <CustomInput onChange={(e) => handleChangeTitle(e.target.value)} value={eventData.title} />
            <p>Description:</p>
            <CustomInput onChange={(e) => handleChangeDescription(e.target.value)} value={eventData.description} />
            <CustomButton onClick={updateEvent}>Update event</CustomButton>
            <CustomButton onClick={deleteEvent}>Delete event</CustomButton>
        </CustomDiv>
    )
}


