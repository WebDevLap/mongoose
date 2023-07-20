import React from "react";
import { Header } from "./modules/Header";
import { ThemeProvider, styled } from "styled-components";
import { useAppSelector } from "./store/store";
import { darkTheme, lightTheme } from "./UI/Themes";
import { Footer } from "./modules/Footer";
import axios from "axios";
import { Route, Routes } from "react-router";
import { useDispatch } from "react-redux";
import { setWeatherData } from "./store/slices/WeatherSlice";
import { setTheme } from "./store/slices/ThemeSlice";
import { SignUp } from "./modules/SignUp";
import { ModalWindow } from "./components/ModalWindow";
import { SignIn } from "./modules/SignIn";

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
    const themeFromLS = localStorage.getItem("theme");
    if (!themeFromLS) {
      localStorage.setItem("theme", "light");
    }
  }, []);

  React.useEffect(() => {
    const themeFromLS = localStorage.getItem("theme");
    if (!themeFromLS) {
      localStorage.setItem("theme", "light");
    } else {
      setTimeout(() => {
        if (themeFromLS === "dark") {
          dispatch(setTheme(themeFromLS));
        } else if (themeFromLS === "light") {
          dispatch(setTheme(themeFromLS));
        }
      }, 500);
    }
  }, []);

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
        dispatch(setWeatherData(data));
      } catch (err) {
        console.log("axios error ( weather data )");
      }
    })();
  }, []);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <AppEl>
        <ModalWindow />
        <Header />
        <Routes>
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
        </Routes>
        <Footer />
      </AppEl>
    </ThemeProvider>
  );
}

export default App;
