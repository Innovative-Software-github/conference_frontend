import React from 'react';
import { ProfilePage } from '../../../views/ProfilePage/ProfilePage';
import { getUser } from '../../../services/user/request';

export default async function Profile() {
  const currentUser = await getUser();

  return <ProfilePage currentUser={currentUser} />;
}