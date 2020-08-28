import { useEffect, useState } from 'react';

export type Theme = 'lightTheme' | 'darkTheme';

// Set explicit return type for custom hook
export const useLightTheme = (): [Theme, () => void] => {
  const [theme, setTheme] = useState<Theme>('lightTheme');

  const setMode = (mode: Theme): void => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const themeToggler = (): void => {
    theme === 'lightTheme' ? setMode('darkTheme') : setMode('lightTheme');
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme && setTheme(localTheme as Theme);
  }, []);
  return [theme, themeToggler];
};
