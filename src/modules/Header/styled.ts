import styled from "styled-components";
import { Container } from "../../UI/components";
import { UI_Funcs } from "../../UI/UI_Funcs/UI_Funcs";

export const Header = styled.section``;

export const HeaderContainer = styled(Container)`
  min-height: ${UI_Funcs.pxToRem(50)};
  border-bottom: 2px solid ${({theme}) => theme.colors.textColor};
  display: flex;
  padding: 5px 0;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
`;




export const HeaderAuth = styled.ul``;

export const HeaderAuthSignIn = styled.li``;

export const HeaderAuthSignUp = styled.section``;
