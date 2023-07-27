import React from 'react';
import { Header } from './modules/Header';
import { ThemeProvider, styled } from 'styled-components';
import { useAppSelector } from './store/store';
import { darkTheme, lightTheme } from './UI/Themes';
import { Footer } from './modules/Footer';
import axios from 'axios';
import { Route, Routes } from 'react-router';
import { useDispatch } from 'react-redux';
import { setTheme } from './store/slices/ThemeSlice';
import { SignUp } from './modules/SignUp';
import { ModalWindow } from './components/ModalWindow';
import { SignIn } from './modules/SignIn';
import { Main } from './modules/Main';
import { useNavigate } from 'react-router-dom';
import qs from 'qs';
import { setFilterName, setFilterPriceFrom, setFilterPriceTo } from './store/slices/FilterSlice';
import { Cart } from './modules/Cart';
import { setCartTotalPrice, setCartTotalProducts } from './store/slices/CartSlice';

const AppEl = styled.div`
  min-height: 97vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

function App() {
  const theme = useAppSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const themeFromLS = localStorage.getItem('theme');
    if (!themeFromLS) {
      localStorage.setItem('theme', 'light');
    }
  }, []);

  React.useEffect(() => {
    const themeFromLS = localStorage.getItem('theme');
    if (!themeFromLS) {
      localStorage.setItem('theme', 'light');
    } else {
      setTimeout(() => {
        if (themeFromLS === 'dark') {
          dispatch(setTheme(themeFromLS));
        } else if (themeFromLS === 'light') {
          dispatch(setTheme(themeFromLS));
        }
      }, 500);
    }
  }, []);

  React.useEffect(() => {
    if (theme === 'dark') {
      document.body.style.backgroundColor = darkTheme.colors.contentColor;
    } else {
      document.body.style.backgroundColor = lightTheme.colors.contentColor;
    }
  }, [theme]);

  const filterMainName = useAppSelector((state) => state.filter.name);
  const filterMainPriceFrom = useAppSelector((state) => state.filter.priceFrom);
  const filterMainPriceTo = useAppSelector((state) => state.filter.priceTo);
  const navigate = useNavigate();
  const isFirstRenderForQS = React.useRef(false);

  React.useEffect(() => {
    const locationHref: string | undefined = String(window.location).split('?')[1];
    if (locationHref) {
      const params = qs.parse(locationHref);
      if (params.filterMainName) {
        dispatch(setFilterName(String(params.filterMainName)));
      }
      if (params.filterMainPriceFrom) {
        dispatch(setFilterPriceFrom(Number(params.filterMainPriceFrom)));
      }
      if (params.filterMainPriceTo) {
        dispatch(setFilterPriceTo(Number(params.filterMainPriceTo)));
      }
    }
  }, []);

  React.useEffect(() => {
    if (!isFirstRenderForQS.current) {
      isFirstRenderForQS.current = true;
      return;
    }
    const queryString = qs.stringify({
      filterMainName,
      filterMainPriceFrom,
      filterMainPriceTo,
    });

    navigate(`?${queryString}`);
  }, [filterMainName, filterMainPriceFrom, filterMainPriceTo]);

  const cartItems = useAppSelector((state) => state.cart.items);

  React.useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    const totalPrice: number = cartItems.reduce((total, el) => total + +el.price * el.count, 0);
    dispatch(setCartTotalPrice(totalPrice));

    const totalProducts: number = cartItems.reduce((total, el) => total + el.count, 0);
    dispatch(setCartTotalProducts(totalProducts));
  }, [cartItems]);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <AppEl>
        <ModalWindow />
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </AppEl>
    </ThemeProvider>
  );
}

export default App;
