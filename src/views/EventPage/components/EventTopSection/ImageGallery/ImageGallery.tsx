'use client'

import * as React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore from 'swiper';
import { Navigation } from 'swiper/modules';
import { ImageGalleryThumbnails } from './ImageGalleryThumbnails/ImageGalleryThumbnails';

import cls from './ImageGallery.module.scss';

SwiperCore.use([Navigation]);

const images = [
  'https://api.it-event-hub.ru/uploads/images/2025/4/productconf-2025-04-22-cover.webp',
  'https://api.it-event-hub.ru/uploads/images/2025/2/ya-lyublyu-frontend-2025-02-15-cover.webp',
  'https://api.it-event-hub.ru/uploads/images/2025/4/it-konferenciya-merge-2025-04-25-cover.webp',
]

export const ImageGallery: React.FC = () => {
  const [swiper, setSwiper] = React.useState<any>(null);
  const [activeImageIndex, setActiveImageIndex] = React.useState(0);

  const onSlideChange = (swiper: any) => {
    setActiveImageIndex(swiper.activeIndex);
  };

  const handleThumbnailClick = (index: number) => {
    setActiveImageIndex(index);
    if (swiper) {
      swiper.slideTo(index);
    }
  };

  return (
    <div>
      <div className={cls.image}>
        <Swiper
          centeredSlides
          onSlideChange={onSlideChange}
          onSwiper={setSwiper}
          initialSlide={activeImageIndex}
        >
          {images.map((image: string) => (
            <SwiperSlide key={image} className={cls.customSwiperSlide}>
              <Image
                src={image}
                alt='Картинка события'
                fill
                sizes="(max-width: 768px) calc(100%-32px), 636px"
                priority
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <ImageGalleryThumbnails
        images={images}
        selectedImage={activeImageIndex}
        onSlideChange={handleThumbnailClick}
      />
    </div>
  )
}
