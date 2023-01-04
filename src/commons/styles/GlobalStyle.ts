import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }

    body {
      width: 100%;
      height: 100vh;
      background-color: ${theme.colors.white};
      font-family: ${theme.font.familyPrimary};
    }

    button,
    a {
      cursor: pointer;
    }

    button {
      outline: none;
      border: none;
      background-color: transparent;
    }
  `}
`;
