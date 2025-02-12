'use client'

import * as React from 'react';
import { Tag } from 'ui-kit-conf/dist';

import { ConstraintContainer } from '../../../../ui/ConstraintContainer/ConstaintContainer';
import { ContentLayout } from '../../../../ui/ContentLayout/ContentLayout';

import cls from './EventDetails.module.scss';

// todo: подключить ручку от бека
export interface IEventDetails {
  eventInfo?: any;
}

const tracks = ['front', 'back', 'ai'];
const title = 'Приглашаем принять участие в главной конференции облачной платформы Yandex Cloud 2024.';
// eslint-disable-next-line max-len
const description = 'Будет интересно всем, кто создает цифровые продукты и решения.\n\n5 тематических треков, 31 доклад, 50 спикеров. Максимум актуальных тем: от роли облачных технологий в разработке продуктов и приложений до их влияния на бизнес-процессы.\n\nВ фокусе - применение генеративных нейросетей и обучение моделей, решения для безопасности, serverless-технологии. Эксперты также поделятся лучшими практиками и инструментами для эффективной работы с данными и облачными ресурсами.'

export const EventDetails: React.FC<IEventDetails> = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  eventInfo,
}) => (
  <ConstraintContainer className={cls.container}>
    <ContentLayout className={cls.contentLayout}>
      {!!tracks?.length && <div className={cls.tracks}>
        {tracks.map((track) => (
          <Tag key={track} type='default'>{track}</Tag>
        ))}
      </div>}
      <div className={cls.title}>{title}</div>
      <div className={cls.description}>{description}</div>
    </ContentLayout>
  </ConstraintContainer>
)