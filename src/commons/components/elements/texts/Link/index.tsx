import { PropsWithChildren } from 'react';

import * as S from './styles';

interface LinkProps {
  href: string;
}

export const Link: React.FC<PropsWithChildren<LinkProps>> = ({
  children,
  href,
}) => <S.Container to={href}>{children}</S.Container>;
