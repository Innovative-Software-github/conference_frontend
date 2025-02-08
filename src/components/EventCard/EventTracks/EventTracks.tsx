'use client';

import { Tag } from 'ui-kit-conf/dist';

import { useEventTracksPresentation } from './utils';
import { ITracksFiltersConfig } from '../../../services/static/filtersConfig/interfaces';

import cls from './EventTracks.module.scss';

export interface IEventTracksProps {
  tracks: ITracksFiltersConfig[];
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
