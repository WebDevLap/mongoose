import React from "react";
import { Header } from "./modules/Header";
import { ThemeProvider, styled } from "styled-components";
import { useAppSelector } from "./store/store";
import { darkTheme, lightTheme } from "./UI/Themes";
import { Footer } from "./modules/Footer";
import axios from "axios";
import { Route, Routes } from "react-router";
import { Main } from "./modules/Main";
import {useDispatch} from 'react-redux'
import { setWeatherData } from "./store/slices/WeatherSlice";

const AppEl = styled.div`
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

function App() {
  const theme = useAppSelector((state) => state.theme.theme);
  const dispatch = useDispatch()

  React.useEffect(() => {
    if (theme === "dark") {
      document.body.style.backgroundColor = darkTheme.colors.contentColor;
    } else {
      document.body.style.backgroundColor = lightTheme.colors.contentColor;
    }
  }, [theme]);
  React.useEffect(() => {
    (async function () {
      try {
        const KEY = "ffc69d0fd39649ebc4e6b810a4438845";
        const { data } = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${KEY}`
        );
        dispatch(setWeatherData(data))
      } catch (err) {
        console.log("axios error");
      }
    })();
  }, []);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <AppEl>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
        <Footer />
      </AppEl>
    </ThemeProvider>
  );
}

export default App;
