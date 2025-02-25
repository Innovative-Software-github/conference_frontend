import Link from 'next/link';
import confEventImage from '@public/event-card-img.jpeg';
import clsx from 'clsx';

import { IEventsResponse } from '../../services/events/interfaces';
import { ImageSwiper } from './ImageSwiper/ImageSwiper';
import { EventTracks } from './EventTracks/EventTracks';

import cls from './EventCard.module.scss';
import { formatDateTime } from '../../utils/dates';
import { DateTimeFormat } from '../../constants/Dates';

export interface IEventCardProps {
  eventModel: IEventsResponse;
  className?: string;
}

export const EventCard: React.FC<IEventCardProps> = ({ eventModel, className }) => {
  const startDate = new Date(eventModel.start_date);
  const endDate = new Date(eventModel.start_date);

  return (
    <Link href={eventModel.url} target="_blank" className={clsx(cls.card, className)}>
      <ImageSwiper
        // На этом уровне нужно обрабатывать случай когда нет карточки (сделать заглушку)
        imgLink={confEventImage as unknown as string}
      />
      <p className={cls.title}>{eventModel.title}</p>
      <EventTracks tracks={eventModel.tracks ?? []} />
      <section>
        <p className={cls.location}>г. {eventModel.city.title}</p>
        <p className={cls.dates}>
          {formatDateTime(startDate, DateTimeFormat.DAY_MONTH)} -  {formatDateTime(endDate, DateTimeFormat.DAY_MONTH)}
        </p>
      </section>
    </Link>
  );
};
