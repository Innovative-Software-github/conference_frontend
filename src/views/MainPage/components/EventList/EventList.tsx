import { IEventsResponse } from '@/services/events/interfaces';
import cls from './EventList.module.scss';
import { EventCard } from '@/components/EventCard/EventCard';
import { ConstraintContainer } from '@/ui/ConstraintContainer/ConstaintContainer';
import { ContentLayout } from '@/ui/ContentLayout/ContentLayout';

export interface IEventListProps {
  events: IEventsResponse[];
}

export const EventList: React.FC<IEventListProps> = ({ events }) => (
  <ConstraintContainer>
    <ContentLayout className={cls.container}>
      {events.map((event) => (
        <EventCard className={cls.card} key={event.id} eventModel={event} />
      ))}
    </ContentLayout>
  </ConstraintContainer>
);
