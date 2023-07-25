import styled, { css } from "styled-components";
import { Container } from "../../UI/components";
import { UI_Funcs } from "../../UI/UI_Funcs/UI_Funcs";
import { NavLink } from "react-router-dom";
import img1 from "./images/img1.svg";
import img2 from "./images/img2.svg";

export const Header = styled.section``;

export const HeaderContainer = styled(Container)`
  min-height: ${UI_Funcs.pxToRem(50)};
  border-bottom: 2px solid ${({ theme }) => theme.colors.textColor};
  display: flex;
  padding: ${UI_Funcs.pxToEm(5)} 0;
  margin-bottom: ${UI_Funcs.pxToEm(15)};
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
`;

export const HeaderAuth = styled.ul`
  display: flex;

  ${UI_Funcs.pcMedia(css`
    flex-direction: column;
    align-items: center;
    font-size: ${UI_Funcs.pxToRem(22)};
    font-weight: 600;
  `)}
`;

export const HeaderItem = styled(NavLink)`
  padding: ${UI_Funcs.pxToEm(15)};
  border-radius: ${UI_Funcs.pxToEm(15)};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textColor};
  cursor: pointer;
  word-break: break-all;
  text-align: center;
  border: 2px solid transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;

  &.active {
    border-radius: ${UI_Funcs.pxToEm(10)};
    border: 2px solid ${({ theme }) => theme.colors.textColor};
  }
  ${UI_Funcs.pcMedia(css`
    width: 100%;
  `)}
`;

export const HeaderAuthSign = styled(HeaderItem)<{ orange?: boolean }>`

  ${(props) =>
    props.orange &&
    css`
      background-color: ${({ theme }) => theme.colors.orange};
    `}
  ${UI_Funcs.pcMedia(css`
    width: 100%;
  `)}
`;
export const Nav = styled.nav<{ active: boolean }>`
  align-items: center;
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-left: ${UI_Funcs.pxToRem(30)};

  ${UI_Funcs.pcMedia(css<{ active: boolean }>`
    position: fixed;
    top: 0;
    right: 0;
    flex-direction: column;
    margin: 0px;
    justify-content: flex-start;
    width: auto;
    min-width: ${UI_Funcs.pxToRem(180)};
    max-width: 65vw;
    background-color: ${({ theme }) => theme.colors.orange};
    height: 100%;
    z-index: 15;
    transform: translate(100%, 0);
    padding: 20px 0;

    ${(props) =>
      props.active &&
      css`
        transform: translate(0, 0);
      `}
  `)}
`;

export const BurgerMenu = styled.div<{ active: boolean }>`
  display: none;
  width: ${UI_Funcs.pxToRem(60)};
  height: ${UI_Funcs.pxToRem(30)};
  /* position: fixed; */
  top: ${UI_Funcs.pxToRem(25)};
  right: ${UI_Funcs.pxToRem(25)};
  cursor: pointer;

  span {
    display: block;
    width: 100%;
    height: ${UI_Funcs.pxToRem(5)};
    background-color: ${({ theme }) => theme.colors.orange};
    position: absolute;
    left: 0;
  }

  & span:nth-child(1) {
    top: 0;
  }
  & span:nth-child(2) {
    top: 50%;
    transform: translate(0, -50%);
  }
  & span:nth-child(3) {
    bottom: 0;
  }

  ${UI_Funcs.pcMedia(css<{ active: boolean }>`
    display: block;
    transition: 0.6s;
    transform: translate(0, 0);

    ${(props) =>
      props.active &&
      css`
        transform: translate(150%, 0);
      `}
  `)}
`;

export const Settings = styled(HeaderItem)<{ isDark: boolean }>`
  &:after {
    content: "";
    display: inline-block;
    height: 30px;
    width: 30px;
    background-size: 30px 30px;
    margin-left: 5px;
    background-image: url(${img1});
    transition: 0.3s;

    ${(props) =>
      props.isDark &&
      css`
        background-image: url(${img2});
      `}
    ${UI_Funcs.pcMedia(css`
      &:after {
        background-image: url(${img1});
      }
    `)}
  }
`;

