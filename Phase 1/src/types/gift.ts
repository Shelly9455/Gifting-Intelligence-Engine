export interface Archetype {
  title: string;
  traits: string[];
}

export interface Gift {
  id: number;
  name: string;
  category: string;
  reasoning: string;
  imageColor: string;
  isMemoryBased: boolean;
  memoryTag?: string;
  score?: number;
  source?: 'interest' | 'catalog';
}

export interface RecommendationContext {
  userArchetypes: Archetype[];
  userAlternativePreferences: string[];
  userAlternativeDescription: string;
  recipientName: string;
  recipientAge: string;
  recipientRelationship: string;
  recipientArchetypes: Archetype[];
  recipientAlternativeChips: string[];
  recipientAlternativeDescription: string;
  bondDynamics: string[];
  bondDescription: string;
  lifeContexts: string[];
  lifeContextDescription: string;
  interests: string[];
  interestDescription: string;
  sharedMemories: string;
  recipientNavigation: string;
}
