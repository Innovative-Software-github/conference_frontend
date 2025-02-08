'use client';

import * as React from 'react';
import { ConstraintContainer } from '@/ui/ConstraintContainer/ConstaintContainer';
import { EventFilters } from './EventFilters/EventFilters';
import { EventList } from './EventList/EventList';
import { IEventsResponse } from '@/services/events/interfaces';
import { IFiltersConfig } from '../../../../services/static/filtersConfig/interfaces';
import { EventListSkeleton } from './EventList/EventListSkeleton/EventListSkeleton';

import cls from './Events.module.scss';

export interface IEventsProps {
  defaultEvents: IEventsResponse[];
  filtersConfig: IFiltersConfig;
}

export const Events: React.FC<IEventsProps> = ({
  defaultEvents,
  filtersConfig,
}) => {
  const [events, setEvents] = React.useState<IEventsResponse[]>(defaultEvents || []);
  const [isLoadingEvents, setIsLoadingEvents] = React.useState(false);

  return (
    <ConstraintContainer className={cls.container}>
      <EventFilters
        filtersConfig={filtersConfig}
        isLoadingEvents={isLoadingEvents}
        onChangeLoadingEvents={(value: boolean) => setIsLoadingEvents(value)}
        onFiltersChange={setEvents}
      />
      <React.Suspense fallback={<EventListSkeleton />}>
        <EventList
          events={events}
          isLoadingEvents={isLoadingEvents}
        />
      </React.Suspense>
    </ConstraintContainer>
  );
};
