import React from "react";
import App from "../../App";
import {
  Header as Headerr,
  HeaderContainer,
  HeaderAuth,
  HeaderAuthSignIn,
  HeaderAuthSignUp,
  Nav,
  BurgerMenu,
} from "./styled";
import { ThemeToggler } from "./ThemeToggler";
import { Logo } from "./Logo";
import { Search } from "./Search";
import { useAppSelector } from "../../store/store";
import { setIsBurgerActive } from "../../store/slices/HeaderSlice";
import { useDispatch } from "react-redux";

export const Header: React.FC = () => {
  const isBurgerActive = useAppSelector((state) => state.header.isBurgerActive);
  const dispatch = useDispatch();
  const navRef = React.useRef(null);
  function onBurgerClick(e: any) {
    dispatch(setIsBurgerActive(true));
    e.stopPropagation();
  }

  React.useEffect(() => {
    function listener(e: any) {
      dispatch(setIsBurgerActive(false));
    }

    document.body.addEventListener("click", (e) => listener(e));

    return document.removeEventListener("click", (e) => listener(e));
  }, []);

  return (
    <Headerr>
      <HeaderContainer>
        <Logo />
        <Search />
        <Nav
          active={isBurgerActive}
          onClick={(e) => e.stopPropagation()}
          ref={navRef}
        >
          <ThemeToggler />
          <HeaderAuth>
            <HeaderAuthSignIn></HeaderAuthSignIn>
            <HeaderAuthSignUp></HeaderAuthSignUp>
          </HeaderAuth>
        </Nav>
        <BurgerMenu active={isBurgerActive} onClick={(e) => onBurgerClick(e)}>
          <span></span>
          <span></span>
          <span></span>
        </BurgerMenu>
      </HeaderContainer>
    </Headerr>
  );
};
