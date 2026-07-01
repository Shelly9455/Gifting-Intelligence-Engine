export type ScreenName =
  | 'landing'
  | 'onboarding'
  | 'swipe-discovery'
  | 'gifting-summary'
  | 'alternative-discovery'
  | 'alternative-summary'
  | 'recipient-about'
  | 'recipient-bond'
  | 'recipient-world'
  | 'recipient-into'
  | 'recipient-swipe'
  | 'recipient-personality-summary'
  | 'recipient-alternative-summary'
  | 'recipient-deeper-context'
  | 'recipient-processing-bridge'
  | 'gift-recommendations';

export interface NavigationParams {
  screen: ScreenName;
  params?: Record<string, string | number | boolean>;
}
