import React from "react";
import { UI_Funcs } from "../../UI/UI_Funcs/UI_Funcs";
import styled, { css } from "styled-components";

const SearchEl = styled.div`
  border-radius: ${UI_Funcs.pxToEm(6)};
  background-color: ${({ theme }) => theme.colors.lightGrey};

  padding: ${UI_Funcs.pxToEm(10)};
  position: relative;
  display: flex;
  align-items: center;
`;

const SearchLogo = styled.div<{ active: boolean }>`
  width: 30px;
  height: 30px;
  display: inline-block;
  transition: 0s;
  cursor: pointer;

  ${(props) =>
    props.active === false &&
    css`
      background: url("data:image/svg+xml;charset=utf-8,%3Csvg width=%2220%22 height=%2220%22 viewBox=%220 0 20 20%22 fill=%22none%22 xmlns=%22http://www.w3.org/2000/svg%22%3E %3Cpath fill-rule=%22evenodd%22 clip-rule=%22evenodd%22 d=%22M13.0109 11.5379C13.7384 10.5162 14.1663 9.2664 14.1663 7.91666C14.1663 4.46488 11.368 1.66666 7.91626 1.66666C4.46448 1.66666 1.66626 4.46488 1.66626 7.91666C1.66626 11.3684 4.46448 14.1667 7.91626 14.1667C9.26638 14.1667 10.5165 13.7386 11.5383 13.0107C11.5439 13.0166 11.5496 13.0224 11.5554 13.0282L15.6102 17.0833C16.017 17.4901 16.6765 17.4901 17.0833 17.0833C17.4901 16.6765 17.4901 17.017 17.0833 15.6102L13.0286 12.5551C13.0227 11.5493 13.0169 11.5435 13.0109 11.5379ZM7.9165 12.2135C10.2896 12.2135 12.2134 10.2897 12.2134 7.91665C12.2134 5.54355 10.2896 3.61977 7.9165 3.61977C5.54341 3.61977 3.61963 5.54355 3.61963 7.91665C3.61963 10.2897 5.54341 12.2135 7.9165 12.2135Z%22 fill=%22%23a5acbd%22/%3E %3C/svg%3E")
        center center no-repeat !important;
    `}

  ${(props) =>
    props.active &&
    css`
      background: url("data:image/svg+xml;charset=utf-8,%3Csvg width=%2220%22 height=%2220%22 viewBox=%220 0 20 20%22 fill=%22none%22 xmlns=%22http://www.w3.org/2000/svg%22%3E %3Cpath d=%22M16.7266 4.5933C17.0911 4.22881 17.0911 3.63786 16.7266 3.27337C16.3621 2.90888 15.7712 2.90888 15.4067 3.27337L10 8.68007L4.5933 3.27337C4.22881 2.90888 3.63786 2.90888 3.27337 3.27337C2.90888 3.63786 2.90888 4.22881 3.27337 4.5933L8.68007 10L3.27337 15.4067C2.90888 15.7712 2.90888 16.3621 3.27337 16.7266C3.63786 17.0911 4.22881 17.0911 4.5933 16.7266L10 11.3199L15.4067 16.7266C15.7712 17.0911 16.3621 17.0911 16.7266 16.7266C17.0911 16.3621 17.0911 15.7712 16.7266 15.4067L11.3199 10L16.7266 4.5933Z%22 fill=%22%23222426%22/%3E %3C/svg%3E")
        center center no-repeat !important;

      opacity: 0.3;
    `}
`;

const SearchInput = styled.input`
  font-size: ${UI_Funcs.pxToRem(16)};
  font-weight: 500;
  width: 220px;

  @media (max-width: ${UI_Funcs.pxToEm(430)}) {
    width: 145px;
  }
`;

export const Search = () => {
  const [searchInput, setSearchInput] = React.useState("");
  const [searchLogoActive, setSearchLogoActive] =
    React.useState<boolean>(false);

  React.useEffect(() => {
    if (searchInput.length === 0) {
      setSearchLogoActive(false);
    } else {
      setSearchLogoActive(true);
    }
  }, [searchInput]);

  function onSearchLogoClick() {
    setSearchInput("");
  }

  return (
    <SearchEl>
      <SearchInput
        onChange={(e) => setSearchInput(e.target.value)}
        value={searchInput}
        placeholder="Город или район"
      />
      <SearchLogo active={searchLogoActive} onClick={onSearchLogoClick} />
    </SearchEl>
  );
};
