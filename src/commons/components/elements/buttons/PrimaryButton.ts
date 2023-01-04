import styled, { css, DefaultTheme } from 'styled-components';

import { Container as Loading } from '../customs/Loading/styles';

interface PrimaryButtonProps {
  size?: 'sm' | 'md' | 'lg';
}

const buttonModifiers = {
  sm: (theme: DefaultTheme) => css`
    padding: 6px 12px;
    font-size: ${theme.sizes.small};
  `,
  md: (theme: DefaultTheme) => css`
    padding: 8px 16px;
    font-size: ${theme.sizes.normal};
  `,
  lg: (theme: DefaultTheme) => css`
    padding: 12px 24px;
    font-size: ${theme.sizes.big};
  `,
};

export const PrimaryButton = styled.button<PrimaryButtonProps>`
  ${({ theme, size }) => css`
    outline: none;
    border: none;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 4px;
    background-color: ${theme.colors.primary};
    transition: background-color 0.3s;

    color: #fff;
    font-family: ${theme.font.familyPrimary};
    font-weight: ${theme.weights.medium};

    :hover {
      background-color: ${theme.colors.primaryDark};
    }

    > ${Loading} > div {
      border-color: rgba(255, 255, 255, 0.363);
      border-top-color: #fff;
    }

    ${size && buttonModifiers[size](theme)}
  `}
`;
