import * as React from 'react';
import { getEvents } from '../../../../services/events/request';
import { EventPage } from '../../../../views/EventPage/EventPage';

export default async function Event({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  id,
}: any) {
  const similarEvents = await getEvents(); // TODO: ЗАМЕНИТЬ НА ВЕРНУЮ РУЧКУ

  return <EventPage
    similarEvents={similarEvents.data}
  />;
}
