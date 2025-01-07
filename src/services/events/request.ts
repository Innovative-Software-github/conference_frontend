import { IEventsResponse } from './interfaces';

export async function getEvents(urlParams?: string): Promise<IEventsResponse[]> {
  try {
    console.log('request ', ` http://localhost:5050/events?${urlParams}`);
    const eventListResponse = await fetch(`http://localhost:5050/events?${urlParams}`);
    const events: IEventsResponse[] = await eventListResponse.json();

    return events;
  } catch (e: any) {
    throw new Error(e);
  }
}
