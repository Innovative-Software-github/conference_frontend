import { IConfEventModel } from '../../EventCard/EventCard';

export async function getEvents(): Promise<IConfEventModel[]> {
  try {
    const eventListResponse = await fetch('http://localhost:3100/events');
    const events: IConfEventModel[] = await eventListResponse.json();

    return events;
  } catch (e) {
    throw new Error('No events found');
  }
}
