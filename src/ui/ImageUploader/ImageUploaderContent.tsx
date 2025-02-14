'use client';

import * as React from 'react'
import { Icon, IconType, Spinner } from 'ui-kit-conf/dist';
import Image from 'next/image';

import cls from './ImageUploader.module.scss';

export interface IImageUploaderContent {
  previewUrl: string;
  isLoading: boolean;
  onImageDelete: (e: React.MouseEvent) => void;
}

export const ImageUploaderContent: React.FC<IImageUploaderContent> = ({
  previewUrl,
  isLoading,
  onImageDelete,
}) => {
  const renderContent = () => {
    if (isLoading) {
      return <Spinner size='l' />
    }

    if (previewUrl) {
      return <Image
        className={cls.image}
        src={previewUrl}
        alt="Фотография события"
        fill
      />
    }

    return <Icon
      type={IconType.Picture_44}
      className={cls.icon}
      width={44}
      height={44}
    />
  }

  return (
    <div>
      {renderContent()}
      <button
        className={cls.closeButton}
        type='button'
        onClick={onImageDelete}
      >
        {previewUrl && (
          <Icon
            type={IconType.Close_20}
            width={16}
            height={16}
            isScalable
          />
        )}
      </button>
    </div>
  )
}
