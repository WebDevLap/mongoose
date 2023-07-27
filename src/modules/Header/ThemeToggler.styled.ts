import { css, styled } from 'styled-components';
import { UI_Funcs } from '../../UI/UI_Funcs/UI_Funcs';
import { ThemeType } from '../../store/slices/ThemeSlice';

export const Theme = styled.div`
  display: flex;
  align-items: center;
`;

export const Toggler = styled.div<{ themeType: ThemeType }>`
  border-radius: ${UI_Funcs.pxToEm(70)};
  height: ${UI_Funcs.pxToEm(40)};
  width: ${UI_Funcs.pxToEm(80)};
  background-color: ${({ theme }) => theme.colors.blue};
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 ${UI_Funcs.pxToEm(4)};
  cursor: pointer;
  position: relative;

  transition: 0.3s;
`;

export const TogglerText = styled.span`
  font-size: ${UI_Funcs.pxToRem(22)};
  margin-right: ${UI_Funcs.pxToEm(10)};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textColor};
`;

export const TogglerElement = styled.div<{ themeType: ThemeType }>`
  height: ${UI_Funcs.pxToEm(32)};
  width: ${UI_Funcs.pxToEm(32)};
  background-color: ${(props) => props.theme.colors.orange};
  border-radius: 100%;
  position: absolute;
  top: 50%;
  left: ${UI_Funcs.pxToEm(3)};
  transform: translate(0, -50%);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    left: ${UI_Funcs.pxToRem(-10)};
    background-color: ${({ theme }) => theme.colors.blue};
    z-index: 5;
    overflow: hidden;
    width: ${UI_Funcs.pxToRem(10)};
    height: ${UI_Funcs.pxToRem(10)};
    border-radius: 100%;
    transition: 1s;
  }

  transition: 1s;
  ${(props) =>
    props.themeType === 'dark' &&
    css`
      left: 96%;
      transform: translate(-100%, -50%);

      &::before {
        left: ${UI_Funcs.pxToEm(-8)};
        width: ${UI_Funcs.pxToRem(25)};
        height: ${UI_Funcs.pxToRem(25)};
      }
    `}
`;
