import { create } from 'zustand';

import type { Archetype } from '@/types';

export interface GiftState {
  userArchetypes: Archetype[];
  alternativePreferences: string[];
  alternativeDescription: string;
  setUserArchetypes: (archetypes: Archetype[]) => void;
  setAlternativePreferences: (preferences: string[]) => void;
  setAlternativeDescription: (description: string) => void;
  resetGiftState: () => void;
}

const initialState = {
  userArchetypes: [] as Archetype[],
  alternativePreferences: [] as string[],
  alternativeDescription: '',
};

export const useGiftStore = create<GiftState>((set) => ({
  ...initialState,
  setUserArchetypes: (userArchetypes) => set({ userArchetypes }),
  setAlternativePreferences: (alternativePreferences) =>
    set({ alternativePreferences }),
  setAlternativeDescription: (alternativeDescription) =>
    set({ alternativeDescription }),
  resetGiftState: () => set({ ...initialState }),
}));
