import * as React from 'react'
import { ConstraintContainer } from '../../../../ui/ConstraintContainer/ConstaintContainer'
import { ImageGallery } from './ImageGallery/ImageGallery'
import { EventLogistics } from './EventLogistics/EventLogistics'

import cls from './EventTopSection.module.scss';

export const EventTopSection: React.FC = () => (
  <ConstraintContainer className={cls.container}>
    <ImageGallery />
    <EventLogistics />
  </ConstraintContainer>
)
