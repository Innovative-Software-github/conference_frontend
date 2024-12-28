/* eslint-disable react/jsx-key */
import React from 'react';
import { MovingLabelsBar } from '../ui/MovingLabelsBar/MovingLabelsBar';
import { Header } from '../ui/Header/Header';
import { PopularConferencesSwiper } from '../components/PopularConferencesSwiper/PopularConferencesSwiper';

export default function Home() {
  const labels = ['С++ Russia 2025', 'Хакатон IT INNO HACK | 28/2', 'Джедайские трюки Java by IT one'];
  const slidesData = [
    {
      src: 'https://api.it-event-hub.ru/uploads/images/2025/4/productconf-2025-04-22-cover.webp',
      alt: 'Слайд 1',
    },
    {
      src: 'https://api.it-event-hub.ru/uploads/images/2025/9/xviii-vserossijskij-profi-forum-dlya-proav-i-it-specialistovav-focus-2025-moskva-2025-09-17-cover.webp',
      alt: 'Слайд 2',
    },
    {
      src: 'https://api.it-event-hub.ru/uploads/images/2025/2/ya-lyublyu-frontend-2025-02-15-cover.webp',
      alt: 'Слайд 3',
    },
    {
      src: 'https://api.it-event-hub.ru/uploads/images/2025/4/it-konferenciya-merge-2025-04-25-cover.webp',
      alt: 'Слайд 4',
    },
    {
      src: 'https://api.it-event-hub.ru/uploads/images/2025/4/mezhdunarodnaya-konferenciya-po-testirovaniyu-i-kachestvu-programmnogo-obespecheniya-sqa-days-2025-04-25-cover.webp',
      alt: 'Слайд 5',
    },
  ];

  return (
    <div>
      <MovingLabelsBar labels={labels} />
      <Header />
      <main>
        <PopularConferencesSwiper slides={slidesData} />
      </main>
      <footer>
        footerы
      </footer>
    </div>
  );
}
