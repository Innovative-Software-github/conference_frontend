export const ApiPath = {
  /* Проверить жизнеспосообность сервера */
  apiHealth: '/api/health',

  /* Ручки для регистрации/аутентификации */
  auth: {
    sign_in: '/api/auth/v1/sign-in',
    sign_up: '/api/auth/v1/sign-up',
    sign_verify: '/api/v1/auth/verify',
    sign_resetPassport: '/api/v1/auth/reset-password',
    sign_changeEmail: '/api/v1/auth/change-mail',
    auth_current: '/api/auth/v1/current',
  },

  /* Ручки для событий */
  events: {
    event_create: '/api/v1/create/event',
    event_getAll: '/api/v1/read/event',
    get_user_events: '/api/v1/user/events',
    get_events: '/api/event/v1/event/filter',
  },

  /* Ручки для сообществ */
  community: {
    community_create: '/api/v1/api/community',
  },

  /* Ручки для конфига фильтров */
  filtersData: {
    cities: '/api/v1/api/city',
    tracks: '/api/v1/api/track',
    formats: '/api/v1/api/format',
    community: '/api/v1/api/community',
  },

  pictures: {
    event: '/api/v1/api/picture/event',
    community: '/api/v1/api/picture/community',
  },
} as const;
