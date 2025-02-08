export const ApiPath = {
  /* Проверить жизнеспосообность сервера */
  apiHealth: '/api/health',

  /* Ручки для регистрации/аутентификации */
  auth: {
    check_token_valid: '/auth/dev/token/valid',
    sign_in: '/auth/sign-in',
    sign_up: '/auth/sign-up',
    sign_verify: '/auth/verify',
    sign_resetPassport: '/auth/reset-password',
    sign_changeEmail: '/auth/change-mail',
  },

  /* Ручки для событий */
  events: {
    event_create: '/api/v1/create/event',
    event_getAll: '/api/v1/read/event',
    get_user_events: '/api/v1/user/events',
    get_events: '/api/v1/filter/events',
  },

  /* Ручки для конфига фильтров */
  filtersData: {
    cities: '/api/v1/api/city',
    tracks: '/api/v1/api/track',
    formats: '/api/v1/api/format',
    community: '/api/v1/api/community',
  },
} as const;
