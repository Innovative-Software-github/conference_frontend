import * as React from 'react';
import { MainPage } from '../views/MainPage/MainPage';
import { getEvents } from '@/services/events/request';
import { buildUrlParams } from '@/views/MainPage/components/Events/buildUrlParams';
import { IEventFiltersParams } from '@/views/MainPage/components/Events/EventFilters/useFilters';

// сюда далее добавляем | IPaginationParams
type IServerUrlParams = IEventFiltersParams;

export default async function Home({ searchParams }: { searchParams: Promise<IServerUrlParams> }) {
  const { city_ids } = await searchParams;

  const urlParams = buildUrlParams({ city_ids });

  const events = await getEvents(urlParams);

  console.log(events);

  return <MainPage events={events} />;
}
