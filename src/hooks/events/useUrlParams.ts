import { useEffect, useState } from 'react';

export function useUrlParams<T>(
  buildUrlParams: (entityToParams: T) => URLSearchParams,
  entityToParams: T,
): URLSearchParams {
  const [entityUrlParams, setEntityUrlParams] = useState<URLSearchParams>(new URLSearchParams());

  useEffect(() => {
    setEntityUrlParams(buildUrlParams(entityToParams));
  }, [entityToParams]);

  return entityUrlParams;
}
