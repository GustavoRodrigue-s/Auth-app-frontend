import { usePosts } from '../../../hook';

import { Post } from '../../elements/cards/Post';
import { Loading } from '../../../../../commons/components/elements/customs';

import * as S from './styles';

export const PostsList: React.FC = () => {
  const { posts, isLoading } = usePosts();

  return (
    <S.Container>
      {isLoading && <Loading size="lg" />}

      {posts.map(({ title, image }, i) => (
        <Post key={`${title}-${i}`} title={title} image={image} />
      ))}
    </S.Container>
  );
};
