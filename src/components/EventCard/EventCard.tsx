import Image from 'next/image';
import confEventImage from '../../../public/event-card-img.jpeg';
import { EventTags } from './EventTags/EventTags';

import cls from './EventCard.module.scss';

export interface IConfEventModel {
  imgLink?: string;
  title: string;
  tags?: string[];
  location: string;
  dateStart: Date;
  dateFinish: Date;
}

export interface IEventCardProps {
  eventModel: IConfEventModel;
}

export const EventCard: React.FC<IEventCardProps> = ({ eventModel }) => (
  <article className={cls.card}>
    <section className={cls.image}>
      {eventModel?.imgLink && <Image src={confEventImage} alt="Conf Image" />}
    </section>
    <p className={cls.title}>{eventModel.title}</p>
    <EventTags tags={eventModel.tags ?? []} />
    <section className={cls.footer}>
      <p className={cls.location}>{eventModel.location}</p>
      <p className={cls.dates}>
        {eventModel.dateStart.getDay()}-{eventModel.dateFinish.getDay()} сентября
      </p>
    </section>
  </article>
);
