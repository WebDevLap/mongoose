import styled, { css } from "styled-components";
import { Container } from "../../UI/components";
import { UI_Funcs } from "../../UI/UI_Funcs/UI_Funcs";

export const Header = styled.section`
`;

export const HeaderContainer = styled(Container)`
  min-height: ${UI_Funcs.pxToRem(50)};
  border-bottom: 2px solid ${({ theme }) => theme.colors.textColor};
  display: flex;
  padding: ${UI_Funcs.pxToEm(5)} 0;
  margin-bottom: ${UI_Funcs.pxToEm(15)};
  align-items: center;
  justify-content: space-between;
`;

export const HeaderAuth = styled.ul``;

export const HeaderAuthSignIn = styled.li``;

export const HeaderAuthSignUp = styled.section``;

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
    max-width: ${UI_Funcs.pxToRem(250)};
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
