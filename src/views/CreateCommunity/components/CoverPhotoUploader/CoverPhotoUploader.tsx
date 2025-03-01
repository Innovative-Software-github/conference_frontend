'use client'

import * as React from 'react'
import { Control, Controller } from 'react-hook-form';

import { toast } from 'sonner';
import { ContentLayout } from '../../../../ui/ContentLayout/ContentLayout';
import { ImageUploader } from '../../../../ui/ImageUploader/ImageUploader';
import { ICommunityCreateRequest } from '../../../../services/communities/interfaces';

import cls from './CoverPhotoUploader.module.scss';
import { postCommunityPicture } from '../../../../services/pictures/request';

export interface ICoverPhotoUploader {
  control: Control<ICommunityCreateRequest, any>;
}

export const CoverPhotoUploader: React.FC<ICoverPhotoUploader> = ({
  control,
}) => {
  const sendCommunityPicture = async (pictureFile: File) => {
    console.log(pictureFile);
    try {
      const formData = new FormData();

      formData.append('file', pictureFile);

      const pictureId = await postCommunityPicture(formData);

      console.log(pictureId);
    } catch (error) {
      toast.error('Не получилось загрузить фотографию, произошла ошибка')
    }
  }

  return (
    <ContentLayout
      title='Обложка'
      className={cls.container}
    >
      <div className={cls.imagesContainer}>
        <Controller
          name="picture_id"
          control={control}
          render={({ field }) => (
            <ImageUploader
              className={cls.imageUploader}
              onImageSelect={(file) => sendCommunityPicture(file)}
            />
          )}
        />
      </div>
    </ContentLayout>
  );
}