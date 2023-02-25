import { Paragraph } from '@commons/components/elements/texts';
import { Logo } from '@commons/components/modules/Logo';

import * as S from './styles';

interface HeaderProps {
  title: string;
  subtitle: string;
}

export const Header: React.FC<HeaderProps> = ({ title, subtitle }) => (
  <S.Container>
    <Logo />
    <h1>{title}</h1>
    <Paragraph>{subtitle}</Paragraph>
  </S.Container>
);
