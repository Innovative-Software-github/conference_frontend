import * as React from 'react'
import { ConstraintContainer } from '../../../../ui/ConstraintContainer/ConstaintContainer'
import { ImageGallery } from './ImageGallery/ImageGallery'
import { EventLogistics } from './EventLogistics/EventLogistics'
import { SplitContainer } from '../../../../ui/SplitContainer/SplitContainer';

import cls from './EventTopSection.module.scss';

export const EventTopSection: React.FC = () => (
  <ConstraintContainer className={cls.container}>
    <SplitContainer
      title='Yandex Scale 2024'
      leftContent={<ImageGallery />}
      rightContent={<EventLogistics />}
    />
  </ConstraintContainer>
)
