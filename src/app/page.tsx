import * as React from 'react';
import { MainPage } from '../views/MainPage/MainPage';
import { fetchFiltersConfig } from '../services/static/filtersConfig/serverAction';
import { getEvents } from '../services/events/request';

export interface IHome {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function Home({
  searchParams,
}: IHome) {
  const filtersConfig = await fetchFiltersConfig();
  const events = await getEvents(await searchParams);

  return <MainPage
    events={events.data}
    filtersConfig={filtersConfig}
  />;
}
