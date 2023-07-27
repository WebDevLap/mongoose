import React from 'react';
import {
  Header as Headerr,
  HeaderContainer,
  HeaderAuth,
  HeaderAuthSign,
  Nav,
  BurgerMenu,
  HeaderItem,
} from './index.styled';
import { ThemeToggler } from './ThemeToggler';
import { Logo } from './Logo';
import { useAppSelector } from '../../store/store';
import { setIsBurgerActive } from '../../store/slices/HeaderSlice';
import { useDispatch } from 'react-redux';

export const Header: React.FC = () => {
  const isBurgerActive = useAppSelector((state) => state.header.isBurgerActive);
  const navRef = React.useRef(null);
  const dispatch = useDispatch();
  
  function onBurgerClick(e: any) {
    dispatch(setIsBurgerActive(true));
    e.stopPropagation();
  }

  React.useEffect(() => {
    function listener(e: any) {
      dispatch(setIsBurgerActive(false));
    }

    document.body.addEventListener('click', (e) => listener(e));

    return document.removeEventListener('click', (e) => listener(e));
  }, []);

  return (
    <Headerr>
      <HeaderContainer>
        <Logo />
        <Nav active={isBurgerActive} ref={navRef}>
          <Logo secondType />
          <ThemeToggler />
          <HeaderItem to="/cart">Корзина</HeaderItem>
          <HeaderAuth>
            <HeaderAuthSign to="/signUp">Зарегистрироваться</HeaderAuthSign>
            <HeaderAuthSign orange to="/signIn">
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
