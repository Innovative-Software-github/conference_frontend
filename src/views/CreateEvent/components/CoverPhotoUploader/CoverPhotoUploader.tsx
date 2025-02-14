import * as React from 'react'

import { ContentLayout } from '../../../../ui/ContentLayout/ContentLayout';
import { ImageUploader } from '../../../../ui/ImageUploader/ImageUploader';

import cls from './CoverPhotoUploader.module.scss';

export const CoverPhotoUploader = () => {
  const d = 5;

  return (
    <ContentLayout className={cls.container}>
      <ImageUploader />
    </ContentLayout>
  )
}
