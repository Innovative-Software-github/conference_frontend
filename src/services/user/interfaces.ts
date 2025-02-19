export interface ICurrentUserResponse {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  email_is_verified: boolean;
  is_admin: boolean;
}