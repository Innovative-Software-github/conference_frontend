'use client';

import * as React from 'react';
import dynamic from 'next/dynamic';

import { IPopularConferencesSwiper } from './PopularConferencesSwiper';
import { PopularConferencesSwiperSkeleton } from './PopularConferencesSwiperSkeleton/PopularConferencesSwiperSkeleton';

const PopularConferencesSwiper = dynamic(
  () => import('../PopularConferencesSwiper/PopularConferencesSwiper'),
  {
    ssr: false,
    loading: () => <PopularConferencesSwiperSkeleton />,
  },
);

export const PopularConferencesSwiperContainer: React.FC<IPopularConferencesSwiper> = ({
  slides,
}) => (
  <PopularConferencesSwiper slides={slides} />
);

export default PopularConferencesSwiperContainer;
