import React from "react";
import { useAppSelector } from "../../store/store";
import { setTheme } from "../../store/slices/ThemeSlice";
import { useDispatch } from "react-redux";
import {Theme,
  Toggler,
  TogglerText,
  TogglerElement} from './ThemeToggler.styled'


export const ThemeToggler: React.FC<{onClick?:Function}> = ({onClick}) => {
  const theme = useAppSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  function toggleClick() {
    theme === "light"
      ? dispatch(setTheme("dark"))
      : dispatch(setTheme("light"));
  }

  return (
    <Theme onClick={(e) => e.stopPropagation()}>
      <TogglerText>Тема </TogglerText>
      <Toggler onClick={toggleClick} themeType={theme}>
        <TogglerElement themeType={theme}></TogglerElement>
      </Toggler>
    </Theme>
  );
};
