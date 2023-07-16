import { styled } from "styled-components";
import { Container } from "../../UI/components";
import { UI_Funcs } from "../../UI/UI_Funcs/UI_Funcs";

export const MainEl = styled.section``;
export const MainContainer = styled(Container)``;

export const Message = styled.div`
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  max-width: 650px;
  border-radius: ${UI_Funcs.pxToEm(10)};
`;

export const WeatherData = styled.div`
  max-width: 650px;
`;
export const WeatherDataTitle = styled.h2`

`;

export const WeatherDataSubtitle = styled.p``;

export const WeatherDataDegree = styled.div``;

export const DegreeText = styled.div``;
