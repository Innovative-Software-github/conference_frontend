import Image from 'next/image';
import confEventImage from '@public/event-card-img.jpeg';
import clsx from 'clsx';
import { EventTags } from '../EventTags/EventTags';

import cls from './EventCard.module.scss';

export interface IConfEventModel {
  id: number;
  imgLink?: string;
  title: string;
  tags?: string[];
  location: string;
  dateStart: number;
  dateFinish: number;
}

export interface IEventCardProps {
  eventModel: IConfEventModel;
  className?: string;
}

export const EventCard: React.FC<IEventCardProps> = ({ eventModel, className }) => (
  <article className={clsx([cls.card, className])}>
    <section className={cls.image}>{eventModel?.imgLink && <Image src={confEventImage} alt="Conf Image" />}</section>
    <p className={cls.title}>{eventModel.title}</p>
    <EventTags tags={eventModel.tags ?? []} />
    <section className={cls.footer}>
      <p className={cls.location}>{eventModel.location}</p>
      <p className={cls.dates}>
        {eventModel.dateStart}-{eventModel.dateFinish} сентября
      </p>
    </section>
  </article>
);
