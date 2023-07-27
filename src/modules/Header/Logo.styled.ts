import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { UI_Funcs } from '../../UI/UI_Funcs/UI_Funcs';

export const HeaderLogo = styled(NavLink)<{ secondType: boolean }>`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  margin-right: ${UI_Funcs.pxToEm(20)};

  ${(props) =>
    !props.secondType &&
    css`
      ${UI_Funcs.tabletMedia(css`
        margin-right: ${UI_Funcs.pxToEm(0)};
      `)}
    `}
  ${(props) =>
    props.secondType &&
    css`
      display: none;
      ${UI_Funcs.pcMedia(css`
        display: flex;
        margin-bottom: ${UI_Funcs.pxToEm(40)};
        border: 2px solid ${({ theme }) => theme.colors.lightGrey};
        padding: ${UI_Funcs.pxToEm(15)};
        border-radius: ${UI_Funcs.pxToEm(15)};
        margin-right: 0;
      `)}
    `}
`;

export const HeaderLogoImg = styled.img`
  width: ${UI_Funcs.pxToRem(40)};
  height: ${UI_Funcs.pxToRem(40)};
`;

export const HeaderLogoText = styled.p<{ secondType: boolean }>`
  font-size: ${UI_Funcs.pxToRem(25)};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textColor};
`;
