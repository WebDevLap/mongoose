import React from "react";
import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import { UI_Funcs } from "../../UI/UI_Funcs/UI_Funcs";

const HeaderLogo = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  margin-right: ${UI_Funcs.pxToEm(20)};

  ${UI_Funcs.tabletMedia(css`
    margin-right: ${UI_Funcs.pxToEm(0)};
  `)}
`;

export const HeaderLogoImg = styled.img`
  width: ${UI_Funcs.pxToRem(40)};
  height: ${UI_Funcs.pxToRem(40)};
`;

const HeaderLogoText = styled.p`
  font-size: ${UI_Funcs.pxToRem(25)};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textColor};

  ${UI_Funcs.tabletMedia(css`
    display: none;
  `)}
`;

export const Logo = () => {
  return (
    <HeaderLogo to="/">
      <HeaderLogoImg
        src="https://www.svgrepo.com/show/490937/weather.svg"
        alt="weth logo"
      />
      <HeaderLogoText>Погода</HeaderLogoText>
    </HeaderLogo>
  );
};
