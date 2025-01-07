'use client';

import { ISelectOptions } from 'ui-kit-conf/dist/types/components/Dropdown/Dropdown';
import { SetStateAction, useEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ConstraintContainer } from '@/ui/ConstraintContainer/ConstaintContainer';
import { EventFilters } from './EventFilters/EventFilters';
import { EventList } from './EventList/EventList';
import { getEvents } from '@/services/events/request';
import { eventsFallback } from '@/constants/eventsFallback';
import cls from './Events.module.scss';
import { IEventsResponse } from '@/services/events/interfaces';
import { FiltersUrlParamsBuilder } from '@/services/events/builders/filtersUrlParamsBuilder';

export interface IEventDate {
  dateStart: Date | null;
  dateFinish: Date | null;
}

export interface IEventFilters {
  location: ISelectOptions[];
  tags: string[];
  date: IEventDate;
}

interface IEventsResponseMock {
  error?: string;
  data: IEventsResponse[];
}

function useEvents(...urlSearchParams: URLSearchParams[]): IEventsResponseMock {
  const [eventsResponse, setEventsResponse] = useState<IEventsResponseMock>({ data: eventsFallback });
  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    async function fetchEvents() {
      try {
        const concatenatedParamsString = urlSearchParams.map((params) => params.toString()).join('&');
        const events = await getEvents(concatenatedParamsString);

        router.push(`${pathName}?${concatenatedParamsString}`);

        setEventsResponse((prev) => ({ ...prev, data: events }));
      } catch (e) {
        setEventsResponse((prev) => ({ ...prev, error: 'Непредвиденная ошибка сервера' }));
      }
    }

    fetchEvents();
  }, [...urlSearchParams]);

  return eventsResponse;
}

function useEventFilters(): [IEventFilters, React.Dispatch<SetStateAction<IEventFilters>>] {
  const params = useSearchParams();
  const locationFilter = params.getAll('location').map((loc) => ({ key: loc, value: loc }) as ISelectOptions);
  const [eventFilters, setEventFilters] = useState<IEventFilters>({
    location: locationFilter ?? [],
    tags: [],
    date: {
      dateStart: null,
      dateFinish: null,
    },
  });

  return [eventFilters, setEventFilters];
}

function useEventFiltersUrlParams(eventFilters: IEventFilters): URLSearchParams {
  const [eventFiltersUrlParams, setEventFiltersUrlParams] = useState<URLSearchParams>(new URLSearchParams());

  useEffect(() => {
    setEventFiltersUrlParams(new FiltersUrlParamsBuilder().builder(eventFilters));
  }, [eventFilters]);

  return eventFiltersUrlParams;
}

export const Events = () => {
  const [eventFilters, setEventFilters] = useEventFilters();
  const eventFiltersUrlParams = useEventFiltersUrlParams(eventFilters);
  const { error, data: events } = useEvents(eventFiltersUrlParams);

  // onFiltersChange
  return (
    <ConstraintContainer className={cls.container}>
      <EventFilters defaultFilters={eventFilters} setEventFilters={setEventFilters} />
      <EventList events={events} />
    </ConstraintContainer>
  );
};
