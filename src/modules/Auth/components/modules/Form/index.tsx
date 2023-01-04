import { HandleSubmit, useForm } from '../../../hooks/useForm';

import {
  Input,
  InputPassword,
} from '../../../../../commons/components/elements/forms';

import { PrimaryButton } from '../../../../../commons/components/elements/buttons';
import { Loading } from '../../../../../commons/components/elements/customs';
import { ErrorMessage } from '../../../../../commons/components/elements/texts';

import * as S from './styles';

interface FormProps {
  buttonText: string;
  handleSubmit: HandleSubmit;
}

export const Form: React.FC<FormProps> = ({ buttonText, handleSubmit }) => {
  const { onSubmit, usernameRef, passwordRef, isLoading, error } = useForm({
    handleSubmit,
  });

  return (
    <S.Container onSubmit={onSubmit}>
      <div>
        <Input type="text" placeholder="Digite seu nome*" ref={usernameRef} />
        <InputPassword placeholder="Digite sua senha*" ref={passwordRef} />
      </div>

      {error && <ErrorMessage>{error}</ErrorMessage>}

      <div>
        <PrimaryButton size="md">
          {isLoading ? <Loading size="sm" /> : buttonText}
        </PrimaryButton>
      </div>
    </S.Container>
  );
};
