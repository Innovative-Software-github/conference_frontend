export interface ILoginRequest {
  email: string;
  password: string;
}

export interface ILoginResponse {
  token: string;
  user_id: number;
}

export interface IRegistrationRequest {
  email: string;
  password: string;
  accept_rules: boolean;
}

export interface IRegistrationResponse extends ILoginResponse { }
