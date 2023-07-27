import { useDispatch } from "react-redux";
import { useAppSelector } from "../store/store";
import React from 'react'
import { darkTheme, lightTheme } from "../UI/Themes";
import { setTheme } from "../store/slices/ThemeSlice";

export function useThemeRender() {
  const theme = useAppSelector((state) => state.theme.theme);
  const dispatch = useDispatch()

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
}
