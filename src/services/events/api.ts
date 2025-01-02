import { IEventsResponse } from './interfaces';


export async function getEvents(): Promise<IEventsResponse[]> {
  try {
    const eventListResponse = await fetch('http://localhost:3100/events');
    const events: IEventsResponse[] = await eventListResponse.json();

    return events;
  } catch (e) {
    throw new Error('No events found');
  }
}
