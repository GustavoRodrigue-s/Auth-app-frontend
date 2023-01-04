import * as S from './styles';

export interface PostProps {
  title: string;
  image: string;
}

export const Post: React.FC<PostProps> = ({ title, image }) => (
  <S.Container>
    <S.ImagePreview>
      <img src={image} alt="" />
    </S.ImagePreview>
    <div>
      <h3>{title}</h3>
    </div>
  </S.Container>
);
