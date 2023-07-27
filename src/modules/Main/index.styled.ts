import styled from "styled-components";
import { Container } from "../../UI/components";
import { UI_Funcs } from "../../UI/UI_Funcs/UI_Funcs";

export const MainEl = styled.div`
  flex: 1 1 auto;
`;

export const MainContainer = styled(Container)``;

export const MainList = styled.div`
  display: flex;
  gap: ${UI_Funcs.pxToEm(15)};
  justify-content: center;
  flex-wrap: wrap;
`;