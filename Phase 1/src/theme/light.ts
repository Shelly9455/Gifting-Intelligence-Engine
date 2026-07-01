import { colors } from '@/constants/colors';

export type ThemeMode = 'light' | 'dark';

export interface Theme {
  mode: ThemeMode;
  colors: {
    primary: string;
    background: string;
    surface: string;
    text: string;
    textMuted: string;
    border: string;
  };
}

export const lightTheme: Theme = {
  mode: 'light',
  colors: {
    primary: colors.primary,
    background: colors.background,
    surface: colors.surface,
    text: colors.text,
    textMuted: colors.textMuted,
    border: colors.border,
  },
};
