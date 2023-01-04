import { PropsWithChildren } from 'react';

import * as S from './styles';

export const Paragraph: React.FC<PropsWithChildren> = ({ children }) => (
  <S.Container>{children}</S.Container>
);
