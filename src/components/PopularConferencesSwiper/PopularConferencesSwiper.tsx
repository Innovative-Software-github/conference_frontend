'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { useMediaQuery } from 'react-responsive';

import 'swiper/css';
import 'swiper/css/pagination';
import './PopularConferencesSwiper.css';

import cls from './PopularConferencesSwiper.module.css';
import { MediaQuery } from '../../constants/MediaQuery';

export interface IPopularConferencesSwiper {
  slides: any;
}

const PopularConferencesSwiper: React.FC<IPopularConferencesSwiper> = ({
  slides,
}) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const isMobile = useMediaQuery({ maxWidth: MediaQuery.BigMobile });

  return (
    <div className={cls.swiperContainer}>
      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 3500,
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
          if (!isMobile) setActiveIndex(swiper.realIndex);
        }}
        onSlideChange={(swiper) => {
          if (!isMobile) setActiveIndex(swiper.realIndex);
        }}
      >
        {slides.map((slideContent: any, index: number) => (
          <SwiperSlide
            key={slideContent.alt}
            className={cls.customSwiperSlide}
          >
            {(index === activeIndex || isMobile) ? (
              <Link href="/" target="_blank">
                <Image
                  src={slideContent.src}
                  alt={slideContent.alt}
                  fill
                  sizes="(max-width: 768px) calc(100%-32px), 636px"
                  priority
                />
              </Link>
            ) : (
              <Image
                src={slideContent.src}
                alt={slideContent.alt}
                fill
                sizes="(max-width: 768px) calc(100%-32px), 636px"
                priority
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularConferencesSwiper;
