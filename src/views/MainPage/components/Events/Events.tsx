'use client';

import { ConstraintContainer } from '@/ui/ConstraintContainer/ConstaintContainer';
import { EventFilters } from './EventFilters/EventFilters';
import { EventList } from './EventList/EventList';
import cls from './Events.module.scss';
import { FiltersUrlParamsBuilder } from '@/services/events/builders/filtersUrlParamsBuilder';
import { useUrlParams } from '@/hooks/events/useUrlParams';
import { useEventFilters } from '@/hooks/events/useEventFilters';
import { useEvents } from '@/hooks/events/useEvents';

interface IEventsProps {}

export const Events: React.FC<IEventsProps> = () => {
  const [eventFilters, setEventFilters] = useEventFilters();
  const eventFiltersUrlParams = useUrlParams(
    (eventFilters) => new FiltersUrlParamsBuilder().builder(eventFilters),
    eventFilters,
  );
  const { error, data: events } = useEvents(eventFiltersUrlParams);

  return (
    <ConstraintContainer className={cls.container}>
      <EventFilters defaultFilters={eventFilters} onFiltersChange={setEventFilters} />
      <EventList events={events} />
    </ConstraintContainer>
  );
};
