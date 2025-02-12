'use client'

import * as React from 'react'
import Image from 'next/image'
import clsx from 'clsx';

import cls from './ImageGalleryThumbnails.module.scss';

export interface IImageGalleryThumbnails {
  images: string[];
  selectedImage: number;
  onSlideChange: (image: number) => void;
}

export const ImageGalleryThumbnails: React.FC<IImageGalleryThumbnails> = ({
  images,
  selectedImage,
  onSlideChange,
}) => (
  <div className={cls.thumbnails}>
    {images.map((image, index) => (
      <button
        key={image}
        type='button'
        className={clsx(cls.thumbnailsButton, {
          [cls.activeImage]: selectedImage === index,
        })}
        onClick={() => onSlideChange(index)}
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
