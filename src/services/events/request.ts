import { IEventsResponse } from './interfaces';

export async function getEvents(urlParams?: URLSearchParams): Promise<IEventsResponse[]> {
  try {
    console.log('request ', ` http://localhost:5050/events?${urlParams?.toString()}`);
    const eventListResponse = await fetch(`http://localhost:5050/events?${urlParams?.toString()}`);
    const events: IEventsResponse[] = await eventListResponse.json();

    console.log(events);

    return events;
  } catch (e: any) {
    throw new Error(e);
  }
}
