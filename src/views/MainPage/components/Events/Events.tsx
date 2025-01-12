'use client';

import { useState } from 'react';
import { ConstraintContainer } from '@/ui/ConstraintContainer/ConstaintContainer';
import { EventFilters } from './EventFilters/EventFilters';
import { EventList } from './EventList/EventList';
import cls from './Events.module.scss';
import { IEventsResponse } from '@/services/events/interfaces';

interface IEventsProps {
  defaultEvents: IEventsResponse[];
}

export const Events: React.FC<IEventsProps> = ({ defaultEvents }) => {
  const [events, setEvents] = useState<IEventsResponse[]>(defaultEvents);

  return (
    <ConstraintContainer className={cls.container}>
      <EventFilters onFiltersApplied={setEvents} />
      <EventList events={events} />
    </ConstraintContainer>
  );
};
