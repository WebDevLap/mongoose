import React from "react";
import App from "../../App";
import {
  Header as Headerr,
  HeaderContainer,
  HeaderAuth,
  HeaderAuthSign,
  Nav,
  BurgerMenu,
  Settings,
  HeaderItem,
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

  function onAuthClick() {
    dispatch(setIsBurgerActive(false));
  }
  const imgae = "https://img.icons8.com/?size=1x&id=nHPBN6xIs3Mg&format=png";

  return (
    <Headerr>
      <HeaderContainer>
        <Logo />
        <Nav
          active={isBurgerActive}
          onClick={(e) => e.stopPropagation()}
          ref={navRef}
        >
          <Logo secondType />
          <ThemeToggler />
          <HeaderItem to='/card'>Корзина</HeaderItem>
          <HeaderAuth>
            <HeaderAuthSign onClick={onAuthClick} to="/signUp">
              Зарегистрироваться
            </HeaderAuthSign>
            <HeaderAuthSign onClick={onAuthClick} orange to="/signIn">
              Войти
            </HeaderAuthSign>
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
