import { useAuthContext } from '@modules/Auth/hooks/useAuthContext';

import { Form } from '@modules/Auth/components/modules';
import { Header } from '@modules/Auth/components/modules/Header';
import { CTALinks } from '@modules/Auth/components/modules/CTALink';

import * as S from '@modules/Auth/styles';

const LoginPage: React.FC = () => {
  const { handleLogin } = useAuthContext();

  return (
    <S.Container>
      <S.Content>
        <Header
          title="Bem-vindo ao Auth App!"
          subtitle="Faça seu login para continuar."
        />
        <Form buttonText="Entrar" handleSubmit={handleLogin} />
        <CTALinks
          paragraphText="Primeira vez aqui?"
          linkHref="/cadastro"
          linkText="Criar uma conta"
        />
      </S.Content>
    </S.Container>
  );
};

export default LoginPage;
