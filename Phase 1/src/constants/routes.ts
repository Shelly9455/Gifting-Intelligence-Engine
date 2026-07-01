export const ROUTES = {
  LANDING: '/',
  ONBOARDING: '/(onboarding)/onboarding',
  SWIPE_DISCOVERY: '/(onboarding)/swipe-discovery',
  GIFTING_SUMMARY: '/(onboarding)/gifting-summary',
  ALTERNATIVE_DISCOVERY: '/(onboarding)/alternative-discovery',
  ALTERNATIVE_SUMMARY: '/(onboarding)/alternative-summary',
  RECIPIENT_ABOUT: '/(recipient)/about',
  RECIPIENT_BOND: '/(recipient)/bond',
  RECIPIENT_WORLD: '/(recipient)/world',
  RECIPIENT_INTO: '/(recipient)/into',
  RECIPIENT_SWIPE: '/(recipient)/swipe',
  RECIPIENT_PERSONALITY_SUMMARY: '/(recipient)/personality-summary',
  RECIPIENT_ALTERNATIVE_SUMMARY: '/(recipient)/alternative-summary',
  RECIPIENT_DEEPER_CONTEXT: '/(recipient)/deeper-context',
  RECIPIENT_PROCESSING_BRIDGE: '/(recipient)/processing-bridge',
  RECOMMENDATIONS: '/(recipient)/recommendations',
} as const;

export type RouteKey = keyof typeof ROUTES;
