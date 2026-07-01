import { create } from 'zustand';

import type { Gift } from '@/types';

export type Flow = 'gift' | 'recipient';

export interface AppState {
  currentFlow: Flow;
  recommendations: Gift[];
  setRecommendations: (recommendations: Gift[]) => void;
  setCurrentFlow: (flow: Flow) => void;
  resetAppState: () => void;
}

const initialState = {
  currentFlow: 'gift' as Flow,
  recommendations: [] as Gift[],
};

export const useAppStore = create<AppState>((set) => ({
  ...initialState,
  setRecommendations: (recommendations) => set({ recommendations }),
  setCurrentFlow: (currentFlow) => set({ currentFlow }),
  resetAppState: () => set({ ...initialState }),
}));
