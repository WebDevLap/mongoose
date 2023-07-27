import { css, styled } from "styled-components";
import { UI_Funcs } from "../../UI/UI_Funcs/UI_Funcs";

export const VoiceWindowEl = styled.div<{ active: boolean }>`
  transform: scale(1);
  position: fixed;
  top: 50%;
  max-width: ${UI_Funcs.pxToRem(450)};
  width: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.colors.grey};
  padding: ${UI_Funcs.pxToEm(20)};
  border-radius: ${UI_Funcs.pxToEm(10)};
  z-index: 10;

  ${(props) =>
    !props.active &&
    css`
      transform: translate(-50%, -50%) scale(0);
    `}
`;

export const VoiceWindowTitle = styled.h2`
  font-size: ${UI_Funcs.pxToRem(22)};
  text-align: center;
  margin-bottom: ${UI_Funcs.pxToEm(15)};
  color: ${({ theme }) => theme.colors.textColor};
  b {
    color: ${({ theme }) => theme.colors.orange};
    word-break: break-all;
  }

  ${UI_Funcs.phoneMedia(css`
    word-break: break-all;
  `)}
`;

export const VoiceWindowChoice = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ChoiceItem = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${UI_Funcs.pxToEm(10)};
  font-size: ${UI_Funcs.pxToRem(18)};
  cursor: pointer;
  user-select: none;
  color: ${({ theme }) => theme.colors.textColor};
  background-color: ${({ theme }) => theme.colors.orange};
  flex-basis: 30%;
`;