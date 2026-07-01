import { create } from 'zustand';

import type { Archetype } from '@/types';

export interface RecipientState {
  name: string;
  age: string;
  relationship: string;
  archetypes: Archetype[];
  alternativeChips: string[];
  alternativeDescription: string;
  bondDynamics: string[];
  bondDescription: string;
  lifeContexts: string[];
  lifeContextDescription: string;
  interests: string[];
  interestDescription: string;
  sharedMemories: string;
  recipientNavigation: string;
  setRecipientInfo: (info: Partial<RecipientState>) => void;
  resetRecipientState: () => void;
}

const initialState = {
  name: '',
  age: '',
  relationship: '',
  archetypes: [] as Archetype[],
  alternativeChips: [] as string[],
  alternativeDescription: '',
  bondDynamics: [] as string[],
  bondDescription: '',
  lifeContexts: [] as string[],
  lifeContextDescription: '',
  interests: [] as string[],
  interestDescription: '',
  sharedMemories: '',
  recipientNavigation: '',
};

export const useRecipientStore = create<RecipientState>((set) => ({
  ...initialState,
  setRecipientInfo: (info) => set((state) => ({ ...state, ...info })),
  resetRecipientState: () => set({ ...initialState }),
}));
