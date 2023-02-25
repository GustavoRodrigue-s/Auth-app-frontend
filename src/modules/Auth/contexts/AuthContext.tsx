import {
  createContext,
  PropsWithChildren,
  useState,
  useEffect,
  useCallback,
} from 'react';

import { cookies } from '@commons/providers';

import { authenticationApi, IError } from '@services/api/authenticationAPI';

import * as T from '../types';

interface AuthContextProps {
  user: T.IUser | null;
  isAuthenticated: boolean;
  handleLogin: (data: T.ISignIn) => Promise<void | IError>;
  handleLogout: () => void;
  handleCreateAccount: (data: T.ISignUp) => Promise<void | IError>;
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [user, setUser] = useState<T.IUser | null>(null);
  const isAuthenticated = !!user;

  useEffect(() => {
    const token = cookies.get({ id: 'authToken' });

    if (!token) {
      setUser(null);
      setIsLoading(false);
      return;
    }

    authenticationApi.setAuth(token);

    (async () => {
      try {
        const { data } = await authenticationApi.recoverUserInformations();
        setUser(data.user);
      } catch {
        resetAuth();
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const handleLogin = useCallback(async ({ username, password }: T.ISignIn) => {
    try {
      const { data } = await authenticationApi.login({
        username,
        password,
      });

      const { user, token }: T.ISignInResponse = data;

      cookies.set({
        id: 'authToken',
        value: token,
        maxAge: 60 * 60 * 24, // 24 hours
      });

      setUser(user);
      authenticationApi.setAuth(token);
    } catch (e: any) {
      const errors: any = {
        400: 'Complete todos os campos!',
        401: 'Nome ou senha incorreto(s)!',
        404: 'Nome ou senha incorreto(s)!',
        500: 'Houve um erro no servidor. Tente mais tarde!',
      };

      const status = `${e.response.status}`;
      const error = errors[status] ?? errors['500'];

      return { error };
    }
  }, []);

  const handleLogout = useCallback(() => {
    resetAuth();
  }, []);

  const handleCreateAccount = useCallback(
    async ({ username, password }: T.ISignUp) => {
      try {
        await authenticationApi.createAccount({
          username,
          password,
        });

        await handleLogin({ username, password });
      } catch (e: any) {
        const errors: any = {
          400: 'Complete todos os campos!',
          401: 'Esse nome já existe!',
          500: 'Houve um erro no servidor. Tente mais tarde!',
        };

        const status = `${e.response.status}`;
        const error = errors[status] ?? errors['500'];

        return { error };
      }
    },
    [handleLogin]
  );

  const resetAuth = () => {
    setUser(null);
    cookies.destroy({ id: 'authToken' });
  };

  if (isLoading) {
    return null;
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        handleLogin,
        handleLogout,
        handleCreateAccount,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
