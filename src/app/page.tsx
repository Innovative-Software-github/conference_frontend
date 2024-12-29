import React from 'react';
import { MovingLabelsBar } from '../ui/MovingLabelsBar/MovingLabelsBar';
import { Header } from '../ui/Header/Header';
import { Card } from '@/components/card/Card';

export default function Home() {
  const labels = ['С++ Russia 2025', 'Хакатон IT INNO HACK | 28/2', 'Джедайские трюки Java by IT one'];

  return (
    <div>
      <MovingLabelsBar labels={labels} />
      <Header />
      <main>
        <Card />
      </main>
    </div>
  );
}
