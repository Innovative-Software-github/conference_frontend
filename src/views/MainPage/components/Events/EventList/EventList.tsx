import cls from './EventList.module.scss';
import { EventCard } from '@/components/EventCard/EventCard';
import { ContentLayout } from '@/ui/ContentLayout/ContentLayout';
import { IEventsResponse } from '@/services/events/interfaces';

export interface IEventListProps {
  events: IEventsResponse[];
}

export const EventList: React.FC<IEventListProps> = ({ events }) => (
  <ContentLayout className={cls.container}>
    {events.map((event) => (
      <EventCard className={cls.card} key={event.id} eventModel={event} />
    ))}
  </ContentLayout>
);
