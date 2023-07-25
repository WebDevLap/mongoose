import React from "react";
import styled, { css } from "styled-components";
import { UI_Funcs } from "../UI/UI_Funcs/UI_Funcs";

interface IInputEl {
  placehold?: string;
  isInputFocus?: boolean;
  isInputText?: boolean;
  error?: string;
  isError?: boolean;
  width?: string;
}

export const InputEl = styled.div<IInputEl>`
  border: 2px solid ${({ theme }) => theme.colors.orange};
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.contentColor};
  max-width: ${(props) => (props.width ? props.width : UI_Funcs.pxToRem(450))};
  width: 100%;
  padding: ${UI_Funcs.pxToEm(10)};
  border-radius: ${UI_Funcs.pxToEm(10)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  &:before {
    content: attr(placehold);
    color: ${({ theme }) => theme.colors.textColor};
    user-select: none;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    left: 12px;
    pointer-events: none;
    font-size: ${UI_Funcs.pxToRem(18)};
    /* font-size: 30px; */
    transition: 0.3s;
    z-index: 2;
    padding: ${UI_Funcs.pxToEm(2)};
    background-color: ${({ theme }) => theme.colors.contentColor};

    ${(props) =>
      (props.isInputFocus || props.isInputText) &&
      css`
        top: ${UI_Funcs.pxToEm(-13)};
        transform: translate(0, 0);
      `}
  }

  &:after {
    content: " ${(props) => props.error}";
    background-position: ${UI_Funcs.pxToEm(2)} center;
    background-color: ${({ theme }) => theme.colors.contentColor};
    background-size: cover;
    align-items: center;
    padding-left: ${UI_Funcs.pxToEm(27)};
    padding-right: ${UI_Funcs.pxToEm(2)};

    background-repeat: no-repeat;
    background-size: ${UI_Funcs.pxToEm(20)} ${UI_Funcs.pxToEm(20)};
    position: absolute;
    bottom: ${UI_Funcs.pxToEm(-11)};
    left: ${UI_Funcs.pxToEm(12)};
    height: ${UI_Funcs.pxToRem(20)};
    z-index: 3;
    opacity: 0;
    transition: 0.3s;

    ${(props) =>
      props.isError &&
      props.error !== "Валидное поле!" &&
      css`
        opacity: 1;
        color: red;
        background-image: url("https://img.icons8.com/?size=512&id=12226&format=png");
        transition: 0.5s;
      `}

    ${(props) =>
      props.error === "Валидное поле!" &&
      css`
        background-image: url("https://img.icons8.com/?size=1x&id=VFaz7MkjAiu0&format=png");
        color: green;
        opacity: 1;
        transition: 0.5s;
      `}
  }
`;

const InputCross = styled.div<IInputEl>`
  width: ${UI_Funcs.pxToRem(22)};
  height: ${UI_Funcs.pxToRem(22)};
  position: relative;
  cursor: pointer;
  pointer-events: none;

  ${(props) =>
    (props.isInputFocus || props.isInputText) &&
    css`
      pointer-events: all;
    `}

  &::before,
  &::after {
    content: "";
    display: block;
    width: 100%;
    height: ${UI_Funcs.pxToRem(2)};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: ${UI_Funcs.pxToEm(2)};
    background-color: ${({ theme }) => theme.colors.textColor};
    transition: 0.3s;
  }
  &::before {
    top: 50%;
    left: -50%;
    transform: translate(0, -50%) rotate(90deg);

    ${(props) =>
      (props.isInputFocus || props.isInputText) &&
      css`
        transform: translate(-50%, -50%) rotate(-45deg);
        left: 50%;
      `}
  }
  &:after {
    top: 50%;
    left: -50%;
    transform: translate(0px, -50%) rotate(90deg);

    ${(props) =>
      (props.isInputFocus || props.isInputText) &&
      css`
        transform: translate(-50%, -50%) rotate(45deg);
        left: 50%;
      `}
  }
`;

export const InputField = styled.input.attrs({ autoComplete: "off" })`
  width: calc(100% - 30px);
  font-size: ${UI_Funcs.pxToRem(22)};
  color: ${({ theme }) => theme.colors.textColor};

  &::placeholder {
    color: ${({ theme }) => theme.colors.textColor};
  }
`;

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
    setInput("");
  }

  const isInputText = input.length > 0 ? true : false;

  return (
    <InputEl
      placehold={placehold}
      isInputFocus={isInputFocus}
      isInputText={isInputText}
      error={error}
      isError={isError}
    >
      {children}
      <InputCross
        onClick={onCrossClick}
        isInputFocus={isInputFocus}
        isInputText={isInputText}
      />
    </InputEl>
  );
};
