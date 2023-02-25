import { AxiosInstance, AxiosResponse } from 'axios';

import { createAuthenticationApi } from '@commons/services';

import * as T from '@modules/Auth/types';

export interface IError {
  error: string;
}

export class AuthenticationAPI {
  axios: AxiosInstance;

  constructor() {
    this.axios = createAuthenticationApi();
  }

  setAuth(token: string) {
    this.axios.defaults.headers['Authorization'] = `Bearer ${token}`;
  }

  async createAccount(data: T.ISignUp): Promise<AxiosResponse> {
    return await this.axios.post('/users', data);
  }

  async login(data: T.ISignIn): Promise<AxiosResponse> {
    return await this.axios.post('/auth', data);
  }

  async recoverUserInformations(): Promise<AxiosResponse> {
    return await this.axios.get('/users/recover');
  }

  async getPosts(): Promise<AxiosResponse> {
    return await this.axios.get('./posts');
  }
}

export const authenticationApi = new AuthenticationAPI();
