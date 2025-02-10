'use client'

import * as React from 'react'
import Image from 'next/image'

import cls from './ImageGallery.module.scss';
import { ImageGalleryThumbnails } from './ImageGalleryThumbnails/ImageGalleryThumbnails';

export interface IImageGallery {

}

const images = [
  'https://api.it-event-hub.ru/uploads/images/2025/4/productconf-2025-04-22-cover.webp',
  'https://api.it-event-hub.ru/uploads/images/2025/2/ya-lyublyu-frontend-2025-02-15-cover.webp',
  'https://api.it-event-hub.ru/uploads/images/2025/4/it-konferenciya-merge-2025-04-25-cover.webp',
]

export const ImageGallery: React.FC<IImageGallery> = () => {
  const [selectedImage, setSelectedImage] = React.useState(images[0]);

  return (
    <div>
      <div className={cls.image}>
        <Image
          src={selectedImage}
          alt='Картинка события'
          fill
          sizes="(max-width: 768px) calc(100%-32px), 636px"
          priority
        />
      </div>
      <ImageGalleryThumbnails
        images={images}
        selectedImage={selectedImage}
        onSelectImage={setSelectedImage}
      />
    </div>
  )
}