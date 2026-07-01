import { darkTheme } from './dark';
import { lightTheme, type Theme, type ThemeMode } from './light';

export * from './light';
export { darkTheme } from './dark';

export const themes: Record<ThemeMode, Theme> = {
  light: lightTheme,
  dark: darkTheme,
};

export const getTheme = (mode: ThemeMode): Theme => themes[mode];
