import * as React from 'react';

import { CreateEventPage } from '../../../views/CreateEvent/CreateEventPage';
import { fetchFiltersConfig } from '../../../services/static/filtersConfig/serverAction';

export default async function CreateEvent() {
  const filtersConfig = await fetchFiltersConfig();

  return <CreateEventPage
    filtersConfig={filtersConfig}
  />
}
