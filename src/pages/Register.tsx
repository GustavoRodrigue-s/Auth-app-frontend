import { useAuthContext } from '../modules/Auth/hooks/useAuthContext';

import { Form } from '../modules/Auth/components/modules';
import { Header } from '../modules/Auth/components/modules/Header';
import { CTALinks } from '../modules/Auth/components/modules/CTALink';

import * as S from '../modules/Auth/styles';

const RegisterPage: React.FC = () => {
  const { handleCreateAccount } = useAuthContext();

  return (
    <S.Container>
      <S.Content>
        <Header
          title="Comece a sua jornada aqui!"
          subtitle="Insira suas credenciais para criar sua conta."
        />
        <Form buttonText="Criar conta" handleSubmit={handleCreateAccount} />
        <CTALinks
          paragraphText="Você já possuí uma conta?"
          linkHref="/login"
          linkText="Entrar"
        />
      </S.Content>
    </S.Container>
  );
};

export default RegisterPage;
