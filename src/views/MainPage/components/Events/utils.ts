import * as React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { stringifySearchParams } from '../../../../utils/searchParams';

export interface IFilters {
  page: string;
  city_ids: string[];
  start_date: string;
  end_date: string;
  max_price: string;
  track_ids: string[];
};

export const useEventFilters = () => {
  const router = useRouter();
  const params = useSearchParams();

  const [filters, setFilters] = React.useState<IFilters>({
    page: params.get('title') || '',
    city_ids: params.getAll('city_ids'),
    start_date: params.get('start_date') || '',
    end_date: params.get('end_date') || '',
    max_price: params.get('max_price') || '',
    track_ids: params.getAll('track_ids'),
  });

  const updateFilterValue = (field: keyof IFilters, value: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [field]: value,
    }));
  };

  const updateFilterArray = (field: keyof IFilters, value: string[]) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [field]: value,
    }));
  };

  const applyFilters = async () => {
    const queryString = stringifySearchParams(filters);

    router.push(`?${queryString}`, { scroll: false });
  };

  return {
    filters,
    updateFilterValue,
    updateFilterArray,
    applyFilters,
  }
};
