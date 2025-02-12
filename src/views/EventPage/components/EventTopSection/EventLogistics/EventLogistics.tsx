'use client'

import * as React from 'react'
import { Button } from 'ui-kit-conf/dist'

import { ContentLayout } from '../../../../../ui/ContentLayout/ContentLayout'
import { EventLogisticsItem } from './EventLogisticsItem'

import cls from './EventLogistics.module.scss';

export interface IEventLogistics {

}

export const EventLogistics: React.FC<IEventLogistics> = () => (
  <ContentLayout className={cls.wrapper}>
    <div>
      <EventLogisticsItem title='Когда'>28–29 сентября</EventLogisticsItem>
      <EventLogisticsItem title='Где'>Москва, МХАТ им. М. Горького</EventLogisticsItem>
      <EventLogisticsItem title='Кто организует'>Яндекс</EventLogisticsItem>
      <EventLogisticsItem title='Стоимость билета'>Бесплатно</EventLogisticsItem>
      <EventLogisticsItem title='Формат'>Офлайн с онлайн трансляцией</EventLogisticsItem>
    </div>
    <Button
      className={cls.button}
      variant='default'
    >Зарегистрироваться</Button>
  </ContentLayout>
)
