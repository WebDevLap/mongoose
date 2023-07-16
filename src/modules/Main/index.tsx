import React from "react";
import { MainEl, MainContainer } from "./styled";
import {
  Message,
  WeatherData,
  WeatherDataTitle,
  WeatherDataSubtitle,
  WeatherDataDegree,
  DegreeText,
} from "./styled";
import { useAppSelector } from "../../store/store";

export const Main = () => {
  const weatherData = useAppSelector(state => state.weather.weatherData)
  return (
    <MainEl>
      <MainContainer>
        <Message>
          Информация по погоде на этом сайте доступна только на сегодняшний день
        </Message>
        <WeatherData>
          <WeatherDataTitle>Погода в {weatherData.name}</WeatherDataTitle>
          <WeatherDataSubtitle></WeatherDataSubtitle>
          <WeatherDataDegree>
            <DegreeText></DegreeText>
          </WeatherDataDegree>
        </WeatherData>
      </MainContainer>
    </MainEl>
  );
};
