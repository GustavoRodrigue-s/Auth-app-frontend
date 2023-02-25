import { useState, useRef, FormEvent } from 'react';

import { IError } from '@services/api/authenticationAPI';

export interface Fields {
  username: string;
  password: string;
}

export type HandleSubmit = (fields: Fields) => Promise<void | IError>;

interface UseFormProps {
  handleSubmit: HandleSubmit;
}

export const useForm = ({ handleSubmit }: UseFormProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);
    setError('');

    const data = await handleSubmit({
      username: usernameRef.current?.value ?? '',
      password: passwordRef.current?.value ?? '',
    });

    if (data?.error) {
      setError(data?.error);
    }

    setIsLoading(false);
  };

  return {
    onSubmit,
    usernameRef,
    passwordRef,
    isLoading,
    error,
  };
};
