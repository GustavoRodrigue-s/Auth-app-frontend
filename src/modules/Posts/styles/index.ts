import styled, { css } from 'styled-components';

import { PrimaryButton } from '../../../commons/components/elements/buttons';

export const Container = styled.div`
  ${({ theme }) => css`
    padding: 20px 20px 80px;
    width: 100%;
    min-height: 100vh;
    background-color: ${theme.colors.white};
  `}
`;

export const Contet = styled.main`
  ${({ theme }) => css`
    padding-top: 112px;
    width: 100%;
    max-width: 960px;
    margin: auto;

    h1 {
      text-align: center;
      font-size: ${theme.sizes.headlingSix};
      color: ${theme.colors.black};

      > span {
        text-transform: capitalize;
      }
    }

    > header {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 32px;

      > ${PrimaryButton} {
        height: 35px;
      }
    }
  `}
`;
