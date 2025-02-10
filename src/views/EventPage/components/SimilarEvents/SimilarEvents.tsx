import * as React from 'react'

import { ConstraintContainer } from '../../../../ui/ConstraintContainer/ConstaintContainer';
import { ContentLayout } from '../../../../ui/ContentLayout/ContentLayout';
import { Title } from '../../../../ui/Title/Title';
import { EventCard } from '../../../../components/EventCard/EventCard';
import { guid } from '../../../../utils/guid';
import { IEventsResponse } from '../../../../services/events/interfaces';

import cls from './SimilarEvents.module.scss';

export interface ISimilarEvents {
  similarEvents: IEventsResponse[]
}

export const SimilarEvents: React.FC<ISimilarEvents> = ({
  similarEvents,
}) => (
  <ConstraintContainer>
    <Title>Похожие события</Title>
    <ContentLayout className={cls.container}>
      {similarEvents.map((event) => (
        <EventCard key={guid()} eventModel={event} />
      ))}
    </ContentLayout>
  </ConstraintContainer>
)