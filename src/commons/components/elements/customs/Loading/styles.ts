import styled, { css } from 'styled-components';

interface ContainerProps {
  size?: 'sm' | 'md' | 'lg';
}

const loadingModifiers = {
  lg: css`
    width: 35px;
    height: 35px;
  `,
  md: css`
    width: 25px;
    height: 25px;
  `,
  sm: css`
    width: 20px;
    height: 20px;
  `,
};

export const Container = styled.div<ContainerProps>`
  ${({ theme, size }) => css`
    @keyframes spin {
      from {
        transform: rotateZ(0);
      }
      to {
        transform: rotateZ(360deg);
      }
    }

    > div {
      border-radius: 50%;
      border: 2px solid ${theme.colors.white100};
      border-top-color: ${theme.colors.black};

      animation: spin 0.6s infinite cubic-bezier(0.4, 0.6, 0.4, 0.7);

      ${(size && loadingModifiers[size]) ?? loadingModifiers.md}
    }
  `}
`;
