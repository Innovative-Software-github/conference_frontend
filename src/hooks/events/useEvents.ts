import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { getEvents } from '@/services/events/request';
import { eventsFallback } from '@/constants/eventsFallback';
import { IEventsResponse } from '@/services/events/interfaces';

interface IEventsResponseMock {
  error?: string;
  data: IEventsResponse[];
}

export function useEvents(...urlSearchParams: URLSearchParams[]): IEventsResponseMock {
  // как обрабатывать ошибку? нужен тип IEventsResponse с полем ошибки и данных
  const [eventsResponse, setEventsResponse] = useState<IEventsResponseMock>({ data: eventsFallback });
  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    async function fetchEvents() {
      try {
        const concatenatedParamsString = urlSearchParams.map((params) => params.toString()).join('&');
        const events = await getEvents(concatenatedParamsString);

        router.push(`${pathName}?${concatenatedParamsString}`);

        setEventsResponse((prev) => ({ ...prev, data: events }));
      } catch (e) {
        setEventsResponse((prev) => ({ ...prev, error: 'Непредвиденная ошибка сервера' }));
      }
    }

    fetchEvents();
  }, [...urlSearchParams]);

  return eventsResponse;
}
