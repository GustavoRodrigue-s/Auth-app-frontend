import styled, { css } from 'styled-components';

import { Input } from '../Input';

export const Container = styled.div`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.white100};
    border-radius: 4px;
    height: 43px;

    > ${Input} {
      border: none;
      padding-right: 0;
      height: 100%;
    }

    &,
    > button {
      display: flex;
      align-items: center;
    }

    button {
      width: 50px;
      height: 100%;
      border-radius: 4px;

      justify-content: center;

      > svg {
        color: ${theme.colors.gray100};
        transition: color 0.3s;
      }

      :hover > svg {
        color: ${theme.colors.black};
      }
    }
  `}
`;
