import React from 'react';
import { InputEl, InputCross } from './Input.styled';

interface IInput {
  isInputFocus: boolean;
  placehold: string;
  input: string;
  setInput: (v: string) => void;
  children: any;
  error: string;
  isError: boolean;
}

export const Input: React.FC<IInput> = ({
  isInputFocus,
  placehold,
  input,
  setInput,
  children,
  error,
  isError,
}) => {
  function onCrossClick() {
    setInput('');
  }

  const isInputText = input.length > 0 ? true : false;

  return (
    <InputEl
      placehold={placehold}
      isInputFocus={isInputFocus}
      isInputText={isInputText}
      error={error}
      isError={isError}>
      {children}
      <InputCross onClick={onCrossClick} isInputFocus={isInputFocus} isInputText={isInputText} />
    </InputEl>
  );
};
