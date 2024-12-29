'use client';

import Image from 'next/image';
import { Tag } from 'ui-kit-conf/dist';
import confEventImage from '../../../public/event-card-img.jpeg';
import styles from './ConfEventCard.module.scss';

export interface ConfEventModel {
  imgLink?: string;
  title: string;
  tags?: string[];
  location: string;
  dateStart: Date;
  dateFinish: Date;
}

interface ConfCardCardProps {
  eventModel: ConfEventModel;
}

export const ConfEventCard = ({ eventModel }: ConfCardCardProps) => (
  <article className={styles.card}>
    <section className={styles.cardImg}>
      {eventModel?.imgLink && <Image src={confEventImage} alt="Conf Image" />}
    </section>
    <p className={styles.cardTitle}>{eventModel.title}</p>
    <section className={styles.cardTags}>
      {eventModel.tags?.map((tag) => (
        <Tag key={tag} type="default">
          {tag}
        </Tag>
      ))}
    </section>
    <section>
      <p>{eventModel.location}</p>
      <p>
        {eventModel.dateStart.toDateString()}-{eventModel.dateFinish.toDateString()}
      </p>
    </section>
  </article>
);
