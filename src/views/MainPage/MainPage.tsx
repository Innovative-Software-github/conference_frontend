import React from 'react'
import { MovingLabelsBar } from '../../components/MovingLabelsBar/MovingLabelsBar';
import { Header } from '../../components/Header/Header';
import PopularConferencesSwiperContainer from './components/PopularConferencesSwiper/SwiperContainer';
import { EventList } from './components/EventList/EventList';
import { EventFilters } from './components/EventFilters/EventFilters';
import { IEventsResponse } from '../../services/events/interfaces';
import { EventLocationForm } from '@/components/EventLocationForm/EventLocationForm';

export const MainPage = () => {
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

  const events: IEventsResponse[] = [
    {
      id: 1,
      imgLink: 'http:/photo.jpg',
      title: 'Хакатон IT INNO HACK',
      tags: [
        'AI',
        'Инфраструктура',
        'Дизайн',
        'Backend',
        'Frontend',
        'Lead',
      ],
      location: 'г. Санкт-Петербург',
      dateStart: 24,
      dateFinish: 25,
      href: '/',
    },
    {
      id: 2,
      imgLink: 'http:/photo.jpg',
      title: 'Хакатон IT INNO HACK',
      tags: [
        'AI',
        'Инфраструктура',
        'Дизайн',
        'Backend',
        'Frontend',
        'Lead',
      ],
      location: 'г. Санкт-Петербург',
      dateStart: 24,
      dateFinish: 25,
      href: '/',
    },
    {
      id: 3,
      imgLink: 'http:/photo.jpg',
      title: 'Хакатон IT INNO HACK',
      tags: [
        'AI',
        'Инфраструктура',
        'Дизайн',
        'Backend',
        'Frontend',
        'Lead',
      ],
      location: 'г. Санкт-Петербург',
      dateStart: 24,
      dateFinish: 25,
      href: '/',
    },
    {
      id: 4,
      imgLink: 'http:/photo.jpg',
      title: 'Хакатон IT INNO HACK',
      tags: [
        'AI',
        'Инфраструктура',
        'Дизайн',
        'Backend',
        'Frontend',
        'Lead',
      ],
      location: 'г. Санкт-Петербург',
      dateStart: 24,
      dateFinish: 25,
      href: '/',
    },
    {
      id: 5,
      imgLink: 'http:/photo.jpg',
      title: 'Хакатон IT INNO HACK',
      tags: [
        'AI',
        'Инфраструктура',
        'Дизайн',
        'Backend',
        'Frontend',
        'Lead',
      ],
      location: 'г. Санкт-Петербург',
      dateStart: 24,
      dateFinish: 25,
      href: '/',
    },
    {
      id: 6,
      imgLink: 'http:/photo.jpg',
      title: 'Хакатон IT INNO HACK',
      tags: [
        'AI',
        'Инфраструктура',
        'Дизайн',
        'Backend',
        'Frontend',
        'Lead',
      ],
      location: 'г. Санкт-Петербург',
      dateStart: 24,
      dateFinish: 25,
      href: '/',
    },
  ]

  return (
    <div>
      <MovingLabelsBar labels={labels} />
      <Header />
      <main>
        <PopularConferencesSwiperContainer slides={slidesData} />
        <EventFilters />
        <EventList events={events} />
      </main>
      <footer>footerы</footer>
      <EventLocationForm />
    </div>
  )
}
