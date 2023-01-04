import { ISignIn } from './Auth';

export interface IUser {
  id: string;
  username: string;
  createdAt: Date;
}

export interface ISignUp extends ISignIn {}

export interface ISignUpResponse {
  id: string;
  username: string;
  createdAt: string;
}
