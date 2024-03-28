import { NextRequest, NextResponse } from "next/server"
import { events } from "../../../../data/events"

export async function GET(request: NextRequest) {
    
    return NextResponse.json(events)
}

export async function POST(request: NextRequest) {
   
    const event = await request.json()

    
    const newEvent = {
        id: events.length +1,
        title: event.title,
        description: event.description
    }

    events.push(newEvent)
    console.log(events);
    
    return NextResponse.json(events)
}
