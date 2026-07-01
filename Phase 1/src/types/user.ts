import type { Archetype } from './gift';

export interface UserPersonality {
  archetypes: Archetype[];
  alternativePreferences: string[];
  alternativeDescription: string;
}
