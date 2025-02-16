import * as React from 'react'
import { Control, Controller } from 'react-hook-form';

import { ContentLayout } from '../../../../ui/ContentLayout/ContentLayout';
import { ImageUploader } from '../../../../ui/ImageUploader/ImageUploader';
import { IEventCreateRequest } from '../../../../services/events/interfaces';

import cls from './CoverPhotoUploader.module.scss';

export interface ICoverPhotoUploader {
  control: Control<IEventCreateRequest, any>
}

export const CoverPhotoUploader: React.FC<ICoverPhotoUploader> = ({
  control,
}) => (
  <ContentLayout
    title='Обложка'
    className={cls.container}
  >
    <div className={cls.imagesContainer}>
      <Controller
        name="coverImages"
        control={control}
        render={({ field }) => (
          <ImageUploader
            className={cls.imageUploader}
            onImageSelect={(file) => {
              const currentImages = field.value || [];
              const updatedImages = [...currentImages, file];

              field.onChange(updatedImages);
            }}
          />
        )}
      />
    </div>
  </ContentLayout>
);
