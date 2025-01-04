import React from 'react';

import cls from './SwiperSkeleton.module.css';

export const PopularConferencesSwiperSkeleton = () => (
  <div className={cls.swiperContainer}>
    <div className={cls.swiper}>
      <div className={cls.customSwiperSlideSkeleton} />
      <div className={cls.customSwiperSlideSkeleton} />
      <div className={cls.customSwiperSlideSkeleton} />
    </div>
  </div>
);
