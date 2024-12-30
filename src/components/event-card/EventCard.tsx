'use client';

import Image from 'next/image';
import confEventImage from '../../../public/event-card-img.jpeg';
import styles from './EventCard.module.scss';
import { EventTags } from '../event-tags/EventTags';
import { IConfEventModel } from '@/types/conf-event';

interface IEventCardProps {
  eventModel: IConfEventModel;
}

export const EventCard: React.FC<IEventCardProps> = ({ eventModel }) => (
  <article className={styles.card}>
    <section className={styles.cardImg}>
      {eventModel?.imgLink && <Image src={confEventImage} alt="Conf Image" />}
    </section>
    <p className={styles.cardTitle}>{eventModel.title}</p>
    <EventTags tags={eventModel.tags ?? []} />
    <section className={styles.cardFooter}>
      <p className={styles.cardLocation}>{eventModel.location}</p>
      <p className={styles.cardDates}>
        {eventModel.dateStart.getDay()}-{eventModel.dateFinish.getDay()} сентября
      </p>
    </section>
  </article>
);
