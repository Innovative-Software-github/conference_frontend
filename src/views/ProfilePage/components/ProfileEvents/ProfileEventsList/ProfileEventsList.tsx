import * as React from 'react'

import cls from './ProfileEventsList.module.scss';
import { IEventsResponse } from '../../../../../services/events/interfaces';
import { EventCard } from '../../../../../components/EventCard/EventCard';
import { guid } from '../../../../../utils/guid';
// import { DEFAULT_MOCK_EVENTS_LIST } from './delete';

export interface IProfileEventsList {
  eventsList: IEventsResponse[];
}

export const ProfileEventsList: React.FC<IProfileEventsList> = ({
  eventsList,
}) => {
  const titleText = eventsList?.length ? 'АКТИВНЫЕ' : 'НЕТ СОБЫТИЙ'

  return (
    <>
      <div className={cls.title}>{titleText}</div>
      {!!eventsList?.length && <div className={cls.eventsList}>
        {eventsList.map((event) => (
          <EventCard key={guid()} eventModel={event} />
        ))}
      </div>}
    </>
  )
}