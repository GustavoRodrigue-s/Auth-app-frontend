export interface ISignIn {
  username: string;
  password: string;
}

export interface ISignInResponse {
  user: {
    id: string;
    username: string;
    createdAt: Date;
  };
  token: string;
}
