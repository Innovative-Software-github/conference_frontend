import { useMemo } from 'react';
import { IEventTagsPresentation } from '../types/event-tags';

export function useEventTagsPresentation(tags: string[], visibleTagsNumber: number): IEventTagsPresentation {
  const eventTagsPresentation = useMemo<IEventTagsPresentation>(
    () => ({
      visibleTags: tags.slice(0, visibleTagsNumber),
      hiddenTagsNumber: tags.length - visibleTagsNumber,
    }),
    [tags],
  );

  return {
    visibleTags: eventTagsPresentation.visibleTags,
    hiddenTagsNumber: eventTagsPresentation.hiddenTagsNumber <= 0 ? 0 : eventTagsPresentation.hiddenTagsNumber,
  };
}
