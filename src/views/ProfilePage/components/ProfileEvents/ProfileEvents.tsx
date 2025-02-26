'use client'

import * as React from 'react'
import { IconType, LinkButton } from 'ui-kit-conf/dist'

import { ContentLayout } from '../../../../ui/ContentLayout/ContentLayout'
import { ROUTES } from '../../../../constants/Routes'
import { ProfileEventsList } from './ProfileEventsList/ProfileEventsList'
import { IEventsResponse } from '../../../../services/events/interfaces'

import cls from './ProfileEvents.module.scss';

export interface IProfileEvents {
  eventsList: IEventsResponse[];
}

export const ProfileEvents: React.FC<IProfileEvents> = ({
  eventsList,
}) => (
  <ContentLayout className={cls.container}>
    <LinkButton
      url={ROUTES.createEvent}
      isExternalLink
      leftIconType={IconType.Plus_20}
      variant='default'
    >
      Предложить событие
    </LinkButton>
    <ProfileEventsList eventsList={eventsList} />
  </ContentLayout>
)