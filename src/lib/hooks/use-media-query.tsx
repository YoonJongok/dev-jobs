import { useCallback, useEffect, useState } from 'react';

type BreakPoints = Record<'mobile' | 'tablet' | 'desktop', string>;

export const breakPoints: BreakPoints = {
  mobile: '375',
  tablet: '768',
  desktop: '1280',
};

export const useMediaQuery = (width: string) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e: MediaQueryListEvent) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(min-width: ${width}px)`);
    media.addEventListener('change', updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeEventListener('change', updateTarget);
  }, [updateTarget, width]);

  return targetReached;
};

