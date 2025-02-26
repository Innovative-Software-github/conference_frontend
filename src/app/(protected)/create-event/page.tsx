import * as React from 'react';

import { CreateEventPage } from '../../../views/CreateEvent/CreateEventPage';
import { fetchFiltersConfig } from '../../../services/static/filtersConfig/serverAction';
import { getUser } from '../../../services/user/request';

export default async function CreateEvent() {
  const filtersConfig = await fetchFiltersConfig();
  const currentUser = await getUser();

  return <CreateEventPage
    currentUser={currentUser}
    filtersConfig={filtersConfig}
  />
}
