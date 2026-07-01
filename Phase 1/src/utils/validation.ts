export const isNonEmpty = (value: string | undefined | null): boolean =>
  typeof value === 'string' && value.trim().length > 0;

export const isValidAge = (age: string): boolean => {
  const n = Number(age);
  return Number.isFinite(n) && n > 0 && n < 150;
};
