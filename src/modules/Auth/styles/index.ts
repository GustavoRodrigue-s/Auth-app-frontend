import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    padding: 20px;
    width: 100%;
    height: 100vh;
    background-color: ${theme.colors.white};
  `}
`;

export const Content = styled.main`
  width: 100%;
  height: 100%;
  max-width: 450px;
  margin: auto;

  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
  justify-content: center;
`;
