import React from "react";
import { styled } from "styled-components";
import { Container } from "../../UI/components";
import { UI_Funcs } from "../../UI/UI_Funcs/UI_Funcs";

const FooterEl = styled.footer``;

const FooterContainer = styled(Container)`
  min-height: ${UI_Funcs.pxToRem(50)};
  background-color: ${({ theme }) => theme.colors.lightGrey};
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: ${UI_Funcs.pxToRem(30)};
`;

export const Footer: React.FC = () => {
  return (
    <FooterEl>
      <FooterContainer>This is a WEATHER app</FooterContainer>
    </FooterEl>
  );
};
