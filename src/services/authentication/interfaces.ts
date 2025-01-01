export interface ILoginRequest {
  email: string;
  password: string;
}

export interface ILoginResponse {
  token: string;
  email_is_verify: boolean;
}

export interface IRegistrationRequest {}

export interface IRegistrationResponse {}
