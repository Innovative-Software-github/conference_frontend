import * as React from 'react';
import { EventPage } from '../../../../views/EventPage/EventPage';
import { getEvents } from '../../../../services/events/request';

export interface IEvent {
  id: Promise<{ id: string }>
}

export default async function Event({
  id,
}: IEvent) {
  console.log(id);
  const similarEvents = await getEvents(); // TODO: ЗАМЕНИТЬ НА ВЕРНУЮ РУЧКУ

  return <EventPage
    similarEvents={similarEvents.data}
  />;
}
