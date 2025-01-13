import { IEventsResponse } from './interfaces';

export async function getEvents(urlParams?: URLSearchParams): Promise<IEventsResponse[]> {
  try {
    const eventListResponse = await fetch(`http://212.113.121.79:8000/api/v1/filter/events?${urlParams?.toString()}`);
    const events: IEventsResponse[] = await eventListResponse.json();

    return events;
  } catch (e: any) {
    throw new Error(e);
  }
}
