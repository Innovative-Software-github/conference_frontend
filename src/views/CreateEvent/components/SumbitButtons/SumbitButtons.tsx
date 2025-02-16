'use client'

import * as React from 'react'
import { Button } from 'ui-kit-conf/dist'

import { ContentLayout } from '../../../../ui/ContentLayout/ContentLayout'

import cls from './SumbitButtons.module.scss';

export interface ISumbitButtons {
  isFormValid: boolean;
}

export const SumbitButtons: React.FC<ISumbitButtons> = ({
  isFormValid,
}) => (
  <ContentLayout className={cls.container}>
    <Button variant="outlined" size="M">Черновик</Button>
    <Button variant="default" size="M" isDisabled={!isFormValid}>Опубликовать</Button>
  </ContentLayout>
)
