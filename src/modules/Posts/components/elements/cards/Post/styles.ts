import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    border-radius: 4px;
    border: 1px solid ${theme.colors.white200};

    display: flex;
    flex-direction: column;

    h3 {
      color: ${theme.colors.black};
    }

    > div {
      text-align: center;
      padding: 20px;
    }

    > ${ImagePreview} {
      padding: 20px 40px;
    }
  `}
`;

export const ImagePreview = styled.div`
  background-color: rgba(0, 0, 0, 0.05);
`;
