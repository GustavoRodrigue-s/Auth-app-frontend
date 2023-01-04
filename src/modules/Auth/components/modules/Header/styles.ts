import styled, { css } from 'styled-components';

export const Container = styled.header`
  ${({ theme }) => css`
    margin-bottom: 24px;
    text-align: center;

    > h1 {
      margin: 12px 0;
      font-size: ${theme.sizes.headlingSix};
      color: ${theme.colors.black};
    }
  `}
`;
