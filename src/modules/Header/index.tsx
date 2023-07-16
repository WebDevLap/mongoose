import React from "react";
import App from "../../App";
import {
  Header as Headerr,
  HeaderContainer,
  HeaderAuth,
  HeaderAuthSignIn,
  HeaderAuthSignUp,
} from "./styled";
import { ThemeToggler } from "./ThemeToggler";
import { Logo } from "./Logo";
import { Search } from "./Search";

export const Header: React.FC = () => {
  return (
    <Headerr>
      <HeaderContainer>
        <Logo />
        <ThemeToggler />
        <Search />
        <HeaderAuth>
          <HeaderAuthSignIn></HeaderAuthSignIn>
          <HeaderAuthSignUp></HeaderAuthSignUp>
        </HeaderAuth>
      </HeaderContainer>
    </Headerr>
  );
};
