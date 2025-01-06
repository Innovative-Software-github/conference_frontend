import Link from 'next/link';
import confEventImage from '@public/event-card-img.jpeg';
import clsx from 'clsx';
import { EventTags } from './EventTags/EventTags';
import { IEventsResponse } from '../../services/events/interfaces';

import cls from './EventCard.module.scss';
import { ImageSwiper } from './ImageSwiper/ImageSwiper';

export interface IEventCardProps {
  eventModel: IEventsResponse;
  className?: string;
}

export const EventCard: React.FC<IEventCardProps> = ({ eventModel, className }) => (
  <article className={clsx(cls.card, className)}>
    <Link href={eventModel.href} target="_blank">
      <ImageSwiper
        // На этом уровне нужно обрабатывать случай когда нет карточки (сделать заглушку)
        imgLink={confEventImage as unknown as string}
      />
      <p className={cls.title}>{eventModel.title}</p>
      <EventTags tags={eventModel.tags ?? []} />
      <section className={cls.footer}>
        <p className={cls.location}>г. {eventModel.location}</p>
        <p className={cls.dates}>
          {eventModel.dateStart}-{eventModel.dateFinish} сентября
        </p>
      </section>
    </Link>
  </article>
);
