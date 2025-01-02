import { getEvents } from '../../../services/events/api';
import { EventCard, IEventsResponse } from '../EventCard/EventCard';
import styles from './EventList.module.scss';

interface IEventListProps { }

export const EventList: React.FC<IEventListProps> = async () => {
  let events: IEventsResponse[] = [];

  try {
    events = await getEvents();
  } catch (e) {
    console.log(e);
  }

  return (
    <section className={styles.container}>
      {events.map((event) => (
        <EventCard className={styles.event} key={event.id} eventModel={event} />
      ))}
    </section>
  );
};
