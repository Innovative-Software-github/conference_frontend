import { useSearchParams } from 'next/navigation';
import { SetStateAction, useState } from 'react';
import { ISelectOptions } from 'ui-kit-conf/dist/types/components/Dropdown/Dropdown';
import { IEventFilters } from '@/services/events/interfaces';

export function useEventFilters(): [IEventFilters, React.Dispatch<SetStateAction<IEventFilters>>] {
  const params = useSearchParams();
  const locationFilter = params.getAll('location').map((loc) => ({ key: loc, value: loc }) as ISelectOptions);
  const [eventFilters, setEventFilters] = useState<IEventFilters>({
    location: locationFilter ?? [],
    tags: [],
    date: {
      dateStart: null,
      dateFinish: null,
    },
  });

  return [eventFilters, setEventFilters];
}
