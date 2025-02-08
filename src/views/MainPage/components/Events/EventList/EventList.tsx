import { Pagination } from 'ui-kit-conf/dist';

import { EventCard } from '@/components/EventCard/EventCard';
import { ContentLayout } from '@/ui/ContentLayout/ContentLayout';
import { IEventsResponse } from '@/services/events/interfaces';
import { guid } from '../../../../../utils/guid';

import cls from './EventList.module.scss';
import { EventListSkeleton } from './EventListSkeleton/EventListSkeleton';

export interface IEventListProps {
  events: IEventsResponse[];
  isLoadingEvents: boolean;
}

export const EventList: React.FC<IEventListProps> = ({
  events,
  isLoadingEvents,
}) => {
  if (!events?.length) {
    return (
      <ContentLayout>
        <p>Нет событий, TODO: Сделать обработку</p>
      </ContentLayout>
    )
  }

  if (isLoadingEvents) {
    return (
      <ContentLayout>
        <EventListSkeleton />
      </ContentLayout>
    )
  }

  return (
    <ContentLayout>
      <div className={cls.container}>
        {events.map((event) => (
          <EventCard
            className={cls.card}
            key={guid()}
            eventModel={event}
          />
        ))}
      </div>
      <Pagination
        className={cls.pagination}
        count={events.length}
        page={1}
        siblingCount={1}
        boundaryCount={1}
        onChange={() => null}
      />
    </ContentLayout>
  );
}