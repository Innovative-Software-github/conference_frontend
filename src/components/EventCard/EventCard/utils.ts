import * as React from 'react';

export interface IEventTagsPresentation {
  visibleTags: string[];
  hiddenTagsNumber: number;
}

export function useEventTagsPresentation(tags: string[], visibleTagsNumber: number): IEventTagsPresentation {
  const eventTagsPresentation = React.useMemo<IEventTagsPresentation>(
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
