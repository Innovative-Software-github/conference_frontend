import React from 'react';
import { MovingLabelsBar } from '../ui/MovingLabelsBar/MovingLabelsBar';

export default function Home() {
  const labels = ['С++ Russia 2025', 'Хакатон IT INNO HACK | 28/2', 'Джедайские трюки Java by IT one'];

  return (
    <div>
      <MovingLabelsBar labels={labels} />
      <header>
        header
      </header>
      <main>
        мейн testrc2
      </main>
      <footer>
        footer
      </footer>
    </div>
  );
}
