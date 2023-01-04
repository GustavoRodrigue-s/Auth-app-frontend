import styled from 'styled-components';

import { Input } from '../../../../../commons/components/elements/forms';
import { Container as InputPassword } from '../../../../../commons/components/elements/forms/InputPassword/styles';

import { PrimaryButton } from '../../../../../commons/components/elements/buttons';

export const Container = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 32px;

  ${Input} {
    border-bottom: none;
    border-radius: 4px 4px 0 0;
  }

  ${InputPassword} {
    border-radius: 0 0 4px 4px;
  }

  ${PrimaryButton} {
    width: 100%;
    height: 38px;
  }
`;
