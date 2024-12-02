export interface User {
  id: number;
  username: string;
  email: string;
  contato?: string;
  chatid?: string;
  is_admin: boolean;
  is_collaborator: boolean;
  is_client: boolean;
  date_joined: string;
  last_login?: string;
}