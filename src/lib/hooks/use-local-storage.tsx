'use client';
export const localStorageKey = {
  theme: 'theme',
};

export const useLocalStorage = <T,>(prefix = 'dev-') => {
  return {
    getLocalStorage: (key: string): T | null => {
      return JSON.parse(window.localStorage.getItem(prefix + key) || 'null');
    },
    setLocalStorage: (key: string, value: T) => {
      window.localStorage.setItem(prefix + key, JSON.stringify(value));
    },
  };
};

