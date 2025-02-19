'use client'

import * as React from 'react'
import { IconType, LinkButton } from 'ui-kit-conf/dist'

import { ContentLayout } from '../../../../ui/ContentLayout/ContentLayout'
import { ROUTES } from '../../../../constants/Routes'

// import cls from './ProfileEvents.module.scss';

export const ProfileEvents = () => (
  <ContentLayout>
    <LinkButton
      url={ROUTES.createEvent}
      isExternalLink
      leftIconType={IconType.Plus_20}
      variant='default'
    >
      Предложить событие
    </LinkButton>
  </ContentLayout>
)
