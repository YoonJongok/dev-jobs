import { useCallback, useEffect, useState } from 'react';

type Size = 'mobile' | 'tablet' | 'desktop';
type BreakPoints = Record<Size, string>;

export const breakPoints: BreakPoints = {
  mobile: '375',
  tablet: '768',
  desktop: '1280',
};

export const useMediaQuery = (size: Size) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e: MediaQueryListEvent) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(min-width: ${breakPoints[size]}px)`);
    media.addEventListener('change', updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeEventListener('change', updateTarget);
  }, [size, updateTarget]);

  return targetReached;
};

