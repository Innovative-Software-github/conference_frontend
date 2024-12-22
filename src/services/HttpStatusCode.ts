export const HttpStatusCode = {
  Ok: 200,
  Created: 201,
  Accepted: 202,

  BadRequest: 400,
  InvalidToken: 401,
  NoAdmin: 403,
  Unauthorized: 422,
  ValidateError: 404,
} as const;

export type THttpStatusCode = typeof HttpStatusCode[keyof typeof HttpStatusCode];
