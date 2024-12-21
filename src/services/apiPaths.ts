export const ApiPath = {
  /* Проверить жизнеспосообность сервера */
  apiHealth: '/api/health',

  /* Ручки для регистрации/аутентификации */
  auth: {
    sign_in: '/api/auth/sign-in',
    sign_up: '/api/auth/sign-up',
    sign_verify: '/api/auth/verify',
    sign_resetPassport: '/api/auth/reset-password',
    sign_changeEmail: '/api/auth/change-mail',
    sign_up_route: 'api/sign_up',
    sign_in_route: 'api/sign_in',
  },

  /* Ручки для событий */
  events: {
    event_create: '/api/v1/create/event',
    event_getAll: '/api/v1/read/event',
    get_user_events: '/api/v1/user/events',
  },
} as const;
