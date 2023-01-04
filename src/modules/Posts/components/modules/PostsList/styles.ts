import styled from 'styled-components';

import { Container as Loading } from '../../../../../commons/components/elements/customs/Loading/styles';

export const Container = styled.div`
  margin-top: 64px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 16px;
  justify-content: center;

  > ${Loading} {
    margin: 40px auto;
  }
`;
