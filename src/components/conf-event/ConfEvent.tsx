'use client';

import Image from 'next/image';
import { Tag } from 'ui-kit-conf/dist';
import confEventImage from '../../../public/favicon.ico';
import styles from './ConfEvent.module.scss';

export interface ConfEventModel {
  imgLink?: string;
  title: string;
  tags?: string[];
  location: string;
  dateStart: Date;
  dateFinish: Date;
}

interface CardProps {
  eventModel: ConfEventModel;
}

export const ConfEvent = ({ eventModel }: CardProps) => (
  <article className={styles.art}>
    <section>{eventModel?.imgLink && <Image width={100} height={100} src={confEventImage} alt="Conf Image" />}</section>
    <p>{eventModel.title}</p>
    <section>
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
