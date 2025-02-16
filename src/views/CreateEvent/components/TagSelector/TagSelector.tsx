import * as React from 'react'
import { Control, Controller } from 'react-hook-form';
import { ComboGroup } from 'ui-kit-conf/dist';

import { ContentLayout } from '../../../../ui/ContentLayout/ContentLayout';
import { ITracksFiltersConfig } from '../../../../services/static/filtersConfig/interfaces';
import { IEventCreateRequest } from '../../../../services/events/interfaces';

export interface ITagSelector {
  control: Control<IEventCreateRequest, any>;
  tracksFilterConfig: ITracksFiltersConfig[];
}

export const TagSelector: React.FC<ITagSelector> = ({
  control,
  tracksFilterConfig,
}) => (
  <ContentLayout
    title='Направления'
  >
    <Controller
      name="selectedTracks"
      control={control}
      render={({ field }) => (
        <ComboGroup
          isSorted
          defaultIds={field.value}
          onChange={(selectedIds) => field.onChange(selectedIds)}
        >
          {tracksFilterConfig.map((track) => (
            <ComboGroup.Checkbox
              key={track.title}
              id={String(track.id)}
            >
              {track.title}
            </ComboGroup.Checkbox>
          ))}
        </ComboGroup>
      )}
    />
  </ContentLayout>
)
