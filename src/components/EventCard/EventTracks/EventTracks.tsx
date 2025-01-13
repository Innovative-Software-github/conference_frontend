'use client';

import { Tag } from 'ui-kit-conf/dist';

import cls from './EventTracks.module.scss';
import { Track } from '@/services/events/interfaces';
import { useEventTracksPresentation } from './utils';

export interface IEventTracksProps {
  tracks: Track[];
  visibleTracksNumber?: number;
}

export const EventTracks: React.FC<IEventTracksProps> = ({ tracks, visibleTracksNumber = 5 }) => {
  const { visibleTracks, hiddenTracksNumber } = useEventTracksPresentation(tracks, visibleTracksNumber);

  if (!tracks.length) {
    return null;
  }

  return (
    <section className={cls.tracks}>
      {visibleTracks.map((tag) => (
        <Tag className={cls.track} key={tag} type="default">
          {tag}
        </Tag>
      ))}
      {hiddenTracksNumber > 0 && <Tag type="default">Ещё {hiddenTracksNumber}</Tag>}
    </section>
  );
};
