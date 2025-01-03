import { IEventsResponse } from './interfaces';


export async function getEvents(): Promise<IEventsResponse[]> {
  try {
    const eventListResponse = await fetch('http://localhost:3000/events');
    const events: IEventsResponse[] = await eventListResponse.json();

    console.log(events)

    return events;
  } catch (e: any) {
    throw new Error(e);
  }
}
