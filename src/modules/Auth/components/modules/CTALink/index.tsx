import { Link, Paragraph } from '@commons/components/elements/texts';

import * as S from './styles';

interface CTALinksProps {
  paragraphText: string;
  linkHref: string;
  linkText: string;
}

export const CTALinks: React.FC<CTALinksProps> = ({
  linkHref,
  linkText,
  paragraphText,
}) => (
  <S.Container>
    <Paragraph>
      {paragraphText} <Link href={linkHref}>{linkText}</Link>
    </Paragraph>
  </S.Container>
);
