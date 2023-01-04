import axios, { AxiosInstance } from 'axios';

export const createAuthenticationApi = (): AxiosInstance => {
  const baseApi = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });

  return baseApi;
};
