import { useAuthContext } from '@modules/Auth/hooks/useAuthContext';

import { PostsList } from '@modules/Posts/components/modules/PostsList';
import { PrimaryButton } from '@commons/components/elements/buttons';

import { Logo } from '@commons/components/modules/Logo';

import * as S from '@modules/Posts/styles';

const PostsPage: React.FC = () => {
  const { user, handleLogout } = useAuthContext();

  return (
    <S.Container>
      <S.Content>
        <header>
          <Logo />
          <S.TitleWrapper>
            <h1>
              Seja bem-vindo, <span>{user?.username}</span>!
            </h1>
            <PrimaryButton size="md" onClick={handleLogout}>
              Sair
            </PrimaryButton>
          </S.TitleWrapper>
        </header>

        <PostsList />
      </S.Content>
    </S.Container>
  );
};

export default PostsPage;
