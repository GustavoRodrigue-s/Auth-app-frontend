import { useState, HTMLAttributes, forwardRef } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

import { Input } from '../Input';

import * as S from './styles';

type InputProps = HTMLAttributes<HTMLInputElement>;

export const InputPassword = forwardRef<HTMLInputElement, InputProps>(
  ({ ...rest }, ref) => {
    const [isShow, setIsShow] = useState<boolean>(false);

    const handleClick = () => setIsShow(prevState => !prevState);

    return (
      <S.Container>
        <Input type={isShow ? 'text' : 'password'} {...rest} ref={ref} />

        <button type="button" onClick={handleClick}>
          {isShow ? (
            <AiOutlineEyeInvisible size={20} />
          ) : (
            <AiOutlineEye size={20} />
          )}
        </button>
      </S.Container>
    );
  }
);
