import React from 'react';
import { Header } from './modules/Header';
import { ThemeProvider, styled } from 'styled-components';
import { useAppSelector } from './store/store';
import { darkTheme, lightTheme } from './UI/Themes';
import { Footer } from './modules/Footer';
import { Route, Routes } from 'react-router';
import { SignUp } from './modules/SignUp';
import { ModalWindow } from './components/ModalWindow';
import { SignIn } from './modules/SignIn';
import { Main } from './modules/Main';
import { Cart } from './modules/Cart';
import { useQS } from './hooks/useQS';
import { useThemeRender } from './hooks/useThemeRender';
import { useCart } from './hooks/useCart';

const AppEl = styled.div`
  min-height: 97vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

function App() {
  const theme = useAppSelector((state) => state.theme.theme);

  useThemeRender()
  useQS()
  useCart()

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
