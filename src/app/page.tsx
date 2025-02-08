import * as React from 'react';
import { MainPage } from '../views/MainPage/MainPage';
import { fetchFiltersConfig } from '../services/static/filtersConfig/serverAction';
import { getEvents } from '../services/events/request';

export const dynamic = 'force-dynamic';

export default async function Home({
  searchParams,
}: any) {
  const filtersConfig = await fetchFiltersConfig();
  const events = await getEvents(await searchParams);

  console.log(await searchParams)

  return <MainPage
    events={events.data}
    filtersConfig={filtersConfig}
  />;
}
