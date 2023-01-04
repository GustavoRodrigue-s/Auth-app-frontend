import * as S from './styles';

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
}

export const Loading: React.FC<LoadingProps> = ({ ...rest }) => (
  <S.Container {...rest}>
    <div />
  </S.Container>
);
