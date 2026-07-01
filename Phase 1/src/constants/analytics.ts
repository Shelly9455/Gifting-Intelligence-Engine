export const ANALYTICS_EVENTS = {
  SCREEN_VIEW: 'screen_view',
  BUTTON_TAP: 'button_tap',
  FORM_SUBMIT: 'form_submit',
  SWIPE_ACTION: 'swipe_action',
  FLOW_STARTED: 'flow_started',
  FLOW_COMPLETED: 'flow_completed',
  FLOW_ABANDONED: 'flow_abandoned',
  RECOMMENDATIONS_GENERATED: 'recommendations_generated',
  RECOMMENDATION_VIEWED: 'recommendation_viewed',
  RECOMMENDATION_SAVED: 'recommendation_saved',
  ERROR_OCCURRED: 'error_occurred',
} as const;

export const SCREEN_NAMES = {
  LANDING: 'landing',
  ONBOARDING: 'onboarding',
  SWIPE_DISCOVERY: 'swipe_discovery',
  GIFTING_SUMMARY: 'gifting_summary',
  RECIPIENT_ABOUT: 'recipient_about',
  RECIPIENT_BOND: 'recipient_bond',
  RECIPIENT_WORLD: 'recipient_world',
  RECIPIENT_INTO: 'recipient_into',
  RECIPIENT_SWIPE: 'recipient_swipe',
  RECOMMENDATIONS: 'recommendations',
} as const;

export type AnalyticsEvent =
  (typeof ANALYTICS_EVENTS)[keyof typeof ANALYTICS_EVENTS];
