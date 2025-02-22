import React from 'react';
import { ProfilePage } from '../../../views/ProfilePage/ProfilePage';
import { getUser } from '../../../services/user/request';
import { getEvents } from '../../../services/events/request';

export default async function Profile() {
  const currentUser = await getUser();
  const eventsList = await getEvents({ author_id: currentUser.data.id });

  return <ProfilePage
    currentUser={currentUser}
    eventsList={eventsList}
  />;
}