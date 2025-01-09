'use client';

import { useMemo } from 'react';
import { ConstraintContainer } from '@/ui/ConstraintContainer/ConstaintContainer';
import { EventFilters } from './EventFilters/EventFilters';
import { EventList } from './EventList/EventList';
import cls from './Events.module.scss';
import { FiltersUrlParamsBuilder } from '@/services/events/builders/filtersUrlParamsBuilder';
import { useEventFilters } from '@/hooks/events/useEventFilters';

interface IEventsProps {}

export const Events: React.FC<IEventsProps> = () => {
  const [eventFilters, setEventFilters] = useEventFilters();
  const eventFultersUrlParams = useMemo<URLSearchParams>(
    () => new FiltersUrlParamsBuilder().builder(eventFilters),
    [eventFilters],
  );

  return (
    <ConstraintContainer className={cls.container}>
      <EventFilters defaultFilters={eventFilters} onFiltersChange={setEventFilters} />
      <EventList filtersUrlParams={eventFultersUrlParams} />
    </ConstraintContainer>
  );
};
