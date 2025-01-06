import { ISelectOptions } from 'ui-kit-conf/dist/types/components/Dropdown/Dropdown';
import { ConstraintContainer } from '@/ui/ConstraintContainer/ConstaintContainer';
import { EventFilters } from './EventFilters/EventFilters';
import { EventList } from './EventList/EventList';
import { getEvents } from '@/services/events/request';
import { IEventsResponse } from '@/services/events/interfaces';
import { eventsFallback } from '@/constants/eventsFallback';
import cls from './Events.module.scss';

export interface IEventFilters {
  location: ISelectOptions[];
  tags: string[];
  dateStart: Date | null;
  dateFinish: Date | null;
}

export const Events = async () => {
  let events: IEventsResponse[] = eventsFallback;

  try {
    events = await getEvents();
  } catch (e) {
    console.log(e);
  }

  return (
    <ConstraintContainer className={cls.container}>
      <EventFilters />
      <EventList events={events} />
    </ConstraintContainer>
  );
};
