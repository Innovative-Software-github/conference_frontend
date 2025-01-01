import { EventCard, IConfEventModel } from '../EventCard/EventCard';
import styles from './EventList.module.scss';

interface IEventListProps {}

export const EventList: React.FC<IEventListProps> = async () => {
  const eventListResponse = await fetch('http://localhost:3100/events');
  const events: IConfEventModel[] = await eventListResponse.json();

  return (
    <section className={styles.container}>
      {events.map((event) => (
        <EventCard className={styles.event} key={event.id} eventModel={event} />
      ))}
    </section>
  );
};
