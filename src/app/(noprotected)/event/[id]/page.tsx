import * as React from 'react';
import { getEvents } from '../../../../services/events/request';
import { EventPage } from '../../../../views/EventPage/EventPage';
import { getUser } from '../../../../services/user/request';

export default async function Event({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  id,
}: any) {
  const currentUser = await getUser();
  const similarEvents = await getEvents(); // TODO: ЗАМЕНИТЬ НА ВЕРНУЮ РУЧКУ

  return <EventPage
    currentUser={currentUser}
    similarEvents={similarEvents.data}
  />;
}
