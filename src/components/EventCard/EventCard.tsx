import Link from 'next/link';
import confEventImage from '@public/event-card-img.jpeg';
import clsx from 'clsx';
import { IEventsResponse } from '../../services/events/interfaces';

import cls from './EventCard.module.scss';
import { ImageSwiper } from './ImageSwiper/ImageSwiper';
import { EventTracks } from './EventTracks/EventTracks';

export interface IEventCardProps {
  eventModel: IEventsResponse;
  className?: string;
}

export const EventCard: React.FC<IEventCardProps> = ({ eventModel, className }) => {
  const startDate = new Date(eventModel.start_date);
  const endDate = new Date(eventModel.start_date);

  return (
    <article className={clsx(cls.card, className)}>
      <Link href={eventModel.url} target="_blank">
        <ImageSwiper
          // На этом уровне нужно обрабатывать случай когда нет карточки (сделать заглушку)
          imgLink={confEventImage as unknown as string}
        />
        <p className={cls.title}>{eventModel.title}</p>
        <EventTracks tracks={eventModel.tracks ?? []} />
        <section className={cls.footer}>
          <p className={cls.location}>г. {eventModel.city.title}</p>
          <p className={cls.dates}>
            {startDate.getDay()} - {endDate.getDay()}
          </p>
        </section>
      </Link>
    </article>
  );
};
