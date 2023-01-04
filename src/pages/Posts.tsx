import { useAuthContext } from '../modules/Auth/hooks/useAuthContext';

import { PostsList } from '../modules/Posts/components/modules/PostsList';
import { PrimaryButton } from '../commons/components/elements/buttons';

import * as S from '../modules/Posts/styles';

const PostsPage: React.FC = () => {
  const { user, handleLogout } = useAuthContext();

  return (
    <S.Container>
      <S.Contet>
        <header>
          <h1>
            Seja bem-vindo, <span>{user?.username}</span>!
          </h1>
          <PrimaryButton size="md" onClick={handleLogout}>
            Sair
          </PrimaryButton>
        </header>

        <PostsList />
      </S.Contet>
    </S.Container>
  );
};

export default PostsPage;
