import { colors } from '@/constants/colors';

import type { Theme } from './light';

export const darkTheme: Theme = {
  mode: 'dark',
  colors: {
    primary: colors.primary,
    background: colors.backgroundDark,
    surface: colors.surfaceDark,
    text: colors.textInverse,
    textMuted: colors.textMuted,
    border: colors.surfaceDark,
  },
};
