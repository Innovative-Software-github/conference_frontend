import { EventCard, IConfEventModel } from '../EventCard/EventCard';
import { getEvents } from './api/getEvents';
import styles from './EventList.module.scss';

interface IEventListProps {}

export const EventList: React.FC<IEventListProps> = async () => {
  let events: IConfEventModel[] = [];

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
