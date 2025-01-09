import cls from './EventList.module.scss';
import { EventCard } from '@/components/EventCard/EventCard';
import { ContentLayout } from '@/ui/ContentLayout/ContentLayout';
import { useEvents } from '@/hooks/events/useEvents';

export interface IEventListProps {
  filtersUrlParams: URLSearchParams;
}

export const EventList: React.FC<IEventListProps> = ({ filtersUrlParams }) => {
  const { data: events } = useEvents(filtersUrlParams);

  return (
    <ContentLayout className={cls.container}>
      {events.map((event) => (
        <EventCard className={cls.card} key={event.id} eventModel={event} />
      ))}
    </ContentLayout>
  );
};
