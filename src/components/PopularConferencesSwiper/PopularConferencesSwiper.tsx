'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import cls from './PopularConferencesSwiper.module.css';

export interface IPopularConferencesSwiper {
  slides: any;
}

export const PopularConferencesSwiper: React.FC<IPopularConferencesSwiper> = ({
  slides,
}) => (
  <div className={cls.swiperContainer}>
    <Swiper
      modules={[Pagination, Autoplay]}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
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
    >
      {slides.map((slideContent: any) => (
        <SwiperSlide
          key={slideContent.alt}
          className={cls.customSwiperSlide}
        >
          <Link href="/" target="_blank">
            <Image
              src={slideContent.src}
              alt={slideContent.alt}
              width={636}
              height={372}
              unoptimized
            />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);
