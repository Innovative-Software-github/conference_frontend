import Image from 'next/image';
import confEventImage from '@public/event-card-img.jpeg';
import clsx from 'clsx';
import { EventTags } from './EventTags/EventTags';
import { IEventsResponse } from '../../services/events/interfaces';

import cls from './EventCard.module.scss';

export interface IEventCardProps {
  eventModel: IEventsResponse;
  className?: string;
}

export const EventCard: React.FC<IEventCardProps> = ({ eventModel, className }) => (
  <article className={clsx(cls.card, className)}>
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
