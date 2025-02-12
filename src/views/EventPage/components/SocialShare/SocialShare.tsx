'use client'

import * as React from 'react'
import { Icon, IconType } from 'ui-kit-conf/dist'

import { ConstraintContainer } from '../../../../ui/ConstraintContainer/ConstaintContainer'
import { Title } from '../../../../ui/Title/Title'

import cls from './SocialShare.module.scss';
import { SquareLink } from '../../../../ui/SquareLink/SquareLink'

export const SocialShare = () => (
  <ConstraintContainer className={cls.wrapper}>
    <Title>Поделиться</Title>
    <div className={cls.socialLinksContainer}>
      {/* todo: подключить ссылки */}
      <SquareLink href='/'>
        <Icon type={IconType.Link_20} width={24} height={24} />
      </SquareLink>
      <SquareLink href='/'>
        <Icon type={IconType.Link_20} width={24} height={24} />
      </SquareLink>
      <SquareLink href='/'>
        <Icon type={IconType.Link_20} width={24} height={24} />
      </SquareLink>
    </div>
  </ConstraintContainer>
)
