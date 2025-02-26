'use client'

import { useEffect } from 'react';

export function useOnClickOutside(ref: React.RefObject<any>, handler: (event: MouseEvent) => void) {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };

    document.addEventListener('click', listener);

    return () => {
      document.removeEventListener('click', listener);
    };
  }, [ref, handler]);
}