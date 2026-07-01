export const colors = {
  primary: '#208AEF',
  primaryDark: '#1A6FBF',
  background: '#FFFFFF',
  backgroundDark: '#0B0B0F',
  surface: '#F5F6F8',
  surfaceDark: '#16171C',
  text: '#111318',
  textMuted: '#6B7280',
  textInverse: '#FFFFFF',
  border: '#E5E7EB',
  success: '#22C55E',
  warning: '#F59E0B',
  danger: '#EF4444',
} as const;

export type ColorToken = keyof typeof colors;
