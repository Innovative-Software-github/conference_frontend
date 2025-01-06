'use client';

import { ISelectOptions } from 'ui-kit-conf/dist/types/components/Dropdown/Dropdown';
import { SetStateAction, useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
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

function useEvents(eventFilters: IEventFilters): IEventsResponseMock {
  const [eventsResponse, setEventsResponse] = useState<IEventsResponseMock>({ data: eventsFallback });

  useEffect(() => {
    async function fetchEvents() {
      try {
        const filtersUrlParams = new FiltersUrlParamsBuilder().builder(eventFilters);

        console.log('filter params', filtersUrlParams);
        const events = await getEvents(filtersUrlParams);

        setEventsResponse((prev) => ({ ...prev, data: events }));
      } catch (e) {
        setEventsResponse((prev) => ({ ...prev, error: 'Непредвиденная ошибка сервера' }));
      }
    }

    fetchEvents();
  }, [eventFilters]);

  return eventsResponse;
}

function useEventFilters(): [IEventFilters, React.Dispatch<SetStateAction<IEventFilters>>] {
  const params = useSearchParams();
  const [eventFilters, setEventFilters] = useState<IEventFilters>({
    location: params.getAll('location').map((loc) => ({ key: loc, value: loc }) as ISelectOptions) ?? [],
    tags: [],
    date: {
      dateStart: null,
      dateFinish: null,
    },
  });

  return [eventFilters, setEventFilters];
}

export const Events = () => {
  const [eventFilters, setEventFilters] = useEventFilters();
  const { error, data: events } = useEvents(eventFilters);

  // onFiltersChange
  return (
    <ConstraintContainer className={cls.container}>
      <EventFilters defaultFilters={eventFilters} setEventFilters={setEventFilters} />
      <EventList events={events} />
    </ConstraintContainer>
  );
};
