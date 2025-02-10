'use client'

import * as React from 'react'
import Image from 'next/image'
import clsx from 'clsx';

import cls from './ImageGalleryThumbnails.module.scss';

export interface IImageGalleryThumbnails {
  images: string[];
  selectedImage: string;
  onSelectImage: (image: string) => void;
}

export const ImageGalleryThumbnails: React.FC<IImageGalleryThumbnails> = ({
  images,
  selectedImage,
  onSelectImage,
}) => (
  <div className={cls.thumbnails}>
    {images.map((image) => (
      <button
        key={image}
        type='button'
        className={clsx(cls.thumbnailsButton, {
          [cls.activeImage]: selectedImage === image,
        })}
        onClick={() => onSelectImage(image)}
      >
        <Image
          src={image}
          alt='Картинка события'
          fill
          sizes="(max-width: 768px) calc(100%-32px), 636px"
          priority
        />
      </button>
    ))}
  </div>
)