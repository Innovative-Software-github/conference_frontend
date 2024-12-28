'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import './PopularConferencesSwiper.css';

import cls from './PopularConferencesSwiper.module.css';

export interface IPopularConferencesSwiper {
  slides: any;
}

export const PopularConferencesSwiper: React.FC<IPopularConferencesSwiper> = ({
  slides,
}) => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <div className={cls.swiperContainer}>
      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 123500,
          disableOnInteraction: false,
        }}
        slidesPerView="auto"
        centeredSlides
        loop
        speed={500}
        spaceBetween={20}
        pagination={{
          clickable: true,
          bulletClass: 'swiperPaginationBullet',
          bulletActiveClass: 'swiperPaginationBulletActive',
        }}
        className={cls.swiper}
        onSwiper={(swiper) => {
          setActiveIndex(swiper.realIndex);
        }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
        }}
      >
        {slides.map((slideContent: any, index: number) => (
          <SwiperSlide
            key={slideContent.alt}
            className={cls.customSwiperSlide}
          >
            {index === activeIndex ? (
              <Link href="/" target="_blank">
                <Image
                  src={slideContent.src}
                  alt={slideContent.alt}
                  fill
                  sizes="(max-width: 768px) calc(100%-32px), 636px"
                />
              </Link>
            ) : (
              <Image
                src={slideContent.src}
                alt={slideContent.alt}
                fill
                sizes="(max-width: 768px) calc(100%-32px), 636px"
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
