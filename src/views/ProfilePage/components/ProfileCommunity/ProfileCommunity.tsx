'use client'

import * as React from 'react'
import { LinkButton } from 'ui-kit-conf/dist'
import { ROUTES } from '../../../../constants/Routes'

export const ProfileCommunity = () => (
  <div>
    <LinkButton
      url={ROUTES.createCommunity}
      isExternalLink
      variant="default"
    >
      Добавить сообщество
    </LinkButton>
  </div>
)
