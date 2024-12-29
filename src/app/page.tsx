import React from 'react';
import { MovingLabelsBar } from '../ui/MovingLabelsBar/MovingLabelsBar';
import { Header } from '../ui/Header/Header';
import { ConfEventCard, ConfEventModel } from '@/components/conf-event-card/ConfEventCard';

const eventModel: ConfEventModel = {
  imgLink: 'http:/photo.jpg',
  title: 'Хакатон IT INNO HACK',
  tags: ['AI', 'Инфраструктура', 'Аналитика', 'Менеджмент', 'C++', 'Java', 'Программирование'],
  location: 'г. Санкт-Петербург',
  dateStart: new Date(Date.UTC(2024, 12, 20)),
  dateFinish: new Date(Date.UTC(2024, 12, 21)),
};

export default function Home() {
  const labels = ['С++ Russia 2025', 'Хакатон IT INNO HACK | 28/2', 'Джедайские трюки Java by IT one'];

  return (
    <div>
      <MovingLabelsBar labels={labels} />
      <Header />
      <main>
        мейн testrc2
        <ConfEventCard eventModel={eventModel} />
      </main>
      <footer>footer</footer>
    </div>
  );
}
