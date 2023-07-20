import React from "react";
import styled, { css } from "styled-components";
import { useAppSelector } from "../store/store";
import { UI_Funcs } from "../UI/UI_Funcs/UI_Funcs";

const ModalWindowEl = styled.div<{active: boolean}>`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 700;

  &:before {
    content: "";
    display: block;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.6;
    background-color: ${({ theme }) => theme.colors.lightGrey};
    top: 0;
    left: 0;
  }

  ${props => !props.active && css`
    display: none;
  `}
`;

const Download = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
  animation-name: rotating;
  animation-duration: 0.3s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  &:before {
    border: 2px solid ${({ theme }) => theme.colors.grey};
    content: "";
    display: block;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    border-radius: 50%;
  }
  &:after {
    content: "";
    display: block;
    width: 100%;
    position: absolute;
    top: 0;
    left: -1.5px;
    height: 100%;
    border-radius: 50%;
    border: 4px solid transparent;
    border-radius: 50%;
    border-left: 4px solid #60babd;
  }

  @keyframes rotating {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Texte = styled.div`
  position: relative;
  color: ${({ theme }) => theme.colors.textColor};
  margin-top: ${UI_Funcs.pxToEm(4)};
`;

export const ModalWindow = () => {
  const ModalWindowStack = useAppSelector(
    (state) => state.modalWindow.modalWindowStack
  );

  return (
    <ModalWindowEl active={ModalWindowStack.length !== 0}>
      <Download></Download>
      <Texte>{ModalWindowStack[0]}</Texte>
    </ModalWindowEl>
  );
};
