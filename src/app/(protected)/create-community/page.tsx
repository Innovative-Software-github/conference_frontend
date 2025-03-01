import * as React from 'react';

import { CreateCommunityPage } from '../../../views/CreateCommunity/CreateCommunityPage';
import { getUser } from '../../../services/user/request';

export default async function CreateCommunity() {
  const currentUser = await getUser();

  return <CreateCommunityPage
    currentUser={currentUser}
  />
}
