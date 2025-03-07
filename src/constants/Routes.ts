export const ROUTES = {
  home: '/',
  login: 'login',
  registation: 'registration',
  createEvent: '/create-event',
  createCommunity: '/create-community',
  profile: {
    index: '/profile/?section=account',
    events: '/profile?section=events',
    communities: '/profile?section=communities',
  },
} as const;
