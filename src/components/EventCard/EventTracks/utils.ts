import * as React from 'react';
import { Track } from '@/services/events/interfaces';

export interface IEventTracksPresentation {
  visibleTracks: string[];
  hiddenTracksNumber: number;
}

export function useEventTracksPresentation(tracks: Track[], visibleTracksNumber: number): IEventTracksPresentation {
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
