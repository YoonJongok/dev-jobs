'use client';
import { useEffect, useState } from 'react';

export const localStorageKey = {
  theme: 'theme',
};

export const useLocalStorage = <T,>(
  key: string,
  prefix = 'dev-'
): {
  localStorageValue: T | string;
  setLocalStorageValue: (value: T) => void;
  clearLocalStorage: () => void;
} => {
  const [localStorageValue, setLocalStorageValue] = useState<T | string>('');

  useEffect(() => {
    if (key) {
      const saved = localStorage.getItem(prefix + key);
      const parsedData: T = saved !== null ? JSON.parse(saved) : '';
      setLocalStorageValue(parsedData);
    }
  }, [key, prefix]);

  useEffect(() => {
    key && localStorage.setItem(prefix + key, JSON.stringify(localStorageValue));
  }, [key, localStorageValue, prefix]);

  const clearLocalStorage = () => localStorage.clear();

  return { localStorageValue, setLocalStorageValue, clearLocalStorage };
};

