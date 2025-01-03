import { IEventsResponse } from '../../../../services/events/interfaces';
import { EventCard } from '../../../../components/EventCard/EventCard';

import cls from './EventList.module.scss';

export interface IEventListProps {
  events: IEventsResponse[]
}

export const EventList: React.FC<IEventListProps> = ({ events }) => (
  <section className={cls.container}>
    {events.map((event) => (
      <EventCard className={cls.event} key={event.id} eventModel={event} />
    ))}
  </section>
);
