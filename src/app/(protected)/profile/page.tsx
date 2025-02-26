import React from 'react';
import { ProfilePage } from '../../../views/ProfilePage/ProfilePage';
import { getUser } from '../../../services/user/request';
import { getEvents } from '../../../services/events/request';

export type IProfileSections = 'account' | 'events' | 'communities';

export interface IProfile {
  searchParams: Promise<{ section: IProfileSections }>
}

export default async function Profile({
  searchParams,
}: IProfile) {
  const searchParamsSection = (await searchParams).section
  const currentUser = await getUser();
  const eventsList = await getEvents({ author_id: currentUser.data.id });

  return <ProfilePage
    currentUser={currentUser}
    eventsList={eventsList}
    selectedSection={searchParamsSection}
  />;
}