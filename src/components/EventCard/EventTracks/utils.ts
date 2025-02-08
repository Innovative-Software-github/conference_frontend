import * as React from 'react';
import { ITracksFiltersConfig } from '../../../services/static/filtersConfig/interfaces';


export interface IEventTracksPresentation {
  visibleTracks: string[];
  hiddenTracksNumber: number;
}

export function useEventTracksPresentation(
  tracks: ITracksFiltersConfig[],
  visibleTracksNumber: number,
): IEventTracksPresentation {
  const eventTracksPresentation = React.useMemo<IEventTracksPresentation>(
    () => ({
      visibleTracks: tracks.slice(0, visibleTracksNumber).map((track) => track.title),
      hiddenTracksNumber: tracks.length - visibleTracksNumber,
    }),
    [tracks],
  );

  return {
    visibleTracks: eventTracksPresentation.visibleTracks,
    hiddenTracksNumber:
      eventTracksPresentation.hiddenTracksNumber <= 0 ? 0 : eventTracksPresentation.hiddenTracksNumber,
  };
}
