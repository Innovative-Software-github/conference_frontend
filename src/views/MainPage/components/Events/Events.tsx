import { ConstraintContainer } from '@/ui/ConstraintContainer/ConstaintContainer';
import { EventFilters } from './EventFilters/EventFilters';
import { EventList } from './EventList/EventList';
import { getEvents } from '@/services/events/request';
import { IEventsResponse } from '@/services/events/interfaces';
import { eventsFallback } from '@/constants/eventsFallback';

export const Events = async () => {
  let events: IEventsResponse[] = eventsFallback;

  try {
    events = await getEvents();
  } catch (e) {
    console.log(e);
  }

  return (
    <ConstraintContainer>
      <EventFilters />
      <EventList events={events} />
    </ConstraintContainer>
  );
};
