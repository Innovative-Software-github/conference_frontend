import * as React from 'react';
import { MainPage } from '../views/MainPage/MainPage';
import { getEvents } from '@/services/events/request';

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { location } = await searchParams;

  const urlParams = new URLSearchParams();

  if (location && typeof location === 'string') {
    urlParams.set('location', location);
  } else if (Array.isArray(location)) {
    location.forEach((loc) => urlParams.append('location', loc));
  }

  const events = await getEvents(urlParams);

  return <MainPage events={events} />;
}
