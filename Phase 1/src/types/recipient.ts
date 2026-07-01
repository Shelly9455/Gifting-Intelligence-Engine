import type { Archetype } from './gift';

export interface RecipientInfo {
  name: string;
  age: string;
  relationship: string;
}

export interface RecipientPersonality {
  archetypes: Archetype[];
  alternativeChips: string[];
  alternativeDescription: string;
}
