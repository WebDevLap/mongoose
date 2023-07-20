import { css, styled } from "styled-components";
import { Container } from "../../UI/components";
import { UI_Funcs } from "../../UI/UI_Funcs/UI_Funcs";

export const SignUpEl = styled.section``;

export const SignUpContainer = styled(Container)`
  padding: ${UI_Funcs.pxToEm(20)};
  border-radius: ${UI_Funcs.pxToEm(20)};
  border: ${UI_Funcs.pxToEm(2)} solid ${({ theme }) => theme.colors.orange};
  max-width: ${UI_Funcs.pxToRem(800)};
`;

export const SignUpTitle = styled.h2`
  font-size: ${UI_Funcs.pxToRem(30)};
  text-align: center;
  margin-bottom: ${UI_Funcs.pxToEm(15)};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textColor};
`;

export const SignUpList = styled.ul`
  display: flex;
  flex-direction: column;

  & > * {
    margin-bottom: ${UI_Funcs.pxToEm(35)};
  }
`;

export const SignUpSubmit = styled.button`
  padding: ${UI_Funcs.pxToEm(10)} ${UI_Funcs.pxToEm(20)};
  font-size: ${UI_Funcs.pxToEm(20)};
  color: ${({ theme }) => theme.colors.textColor};
  background-color: ${({ theme }) => theme.colors.orange};
  border-radius: ${UI_Funcs.pxToEm(10)};

  &:disabled {
    background-color: ${({ theme }) => theme.colors.grey};
    cursor: no-drop;
  }
`;

export const SignUpGlobError = styled.div<{ active: boolean }>`
  color: red;
  font-size: ${UI_Funcs.pxToRem(25)};
  margin-bottom: ${UI_Funcs.pxToEm(15)};
  display: flex;

  &:before {
    content: "";
    background-image: url("https://img.icons8.com/?size=1x&id=rmf1Fvj5nBib&format=png");
    display: block;
    background-size: 25px 25px;
    background-position: cover;
    width: 25px;
    height: 25px;
  }

  ${(props) =>
    !props.active &&
    css`
      display: none;
    `}
`;
