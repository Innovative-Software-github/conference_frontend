'use client';

import * as React from 'react';
import dynamic from 'next/dynamic';

import { IPopularConferencesSwiper } from './Swiper';
import { PopularConferencesSwiperSkeleton } from './SwiperSkeleton/SwiperSkeleton';

const PopularConferencesSwiper = dynamic(() => import('./Swiper'), {
  ssr: false,
  loading: () => <PopularConferencesSwiperSkeleton />,
});

export const PopularConferencesSwiperContainer: React.FC<IPopularConferencesSwiper> = ({ slides }) => (
  <PopularConferencesSwiper slides={slides} />
);

export default PopularConferencesSwiperContainer;
