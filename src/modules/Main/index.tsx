import React from "react";
import { MainEl, MainContainer } from "./styled";
import {
  Message,
  WeatherData,
  WeatherDataTitle,
  WeatherDataSubtitle,
  WeatherDataDegree,
  DegreeText,
  DegreeSubtext,
  WeatherDataAddInfo,
  AddInfoItem,
  Img1,
  Img2,
  Img3,
} from "./styled";
import { useAppSelector } from "../../store/store";

export const Main = () => {
  const weatherData = useAppSelector((state) => state.weather.weatherData);
  console.log(weatherData);
  const Data = new Date();
  const hours = Data.getHours();
  const minutes = Data.getMinutes();

  return (
    <MainEl>
      <MainContainer>
        <Message>
          Информация по погоде на этом сайте доступна только на сегодняшний день
        </Message>
        <WeatherData>
          <WeatherDataTitle>Погода в {weatherData.name}</WeatherDataTitle>
          <WeatherDataSubtitle>
            Сейчас {hours}:{minutes}. Координаты {weatherData.coord.lon} :{" "}
            {weatherData.coord.lat}
          </WeatherDataSubtitle>
          <WeatherDataDegree>
            <DegreeText>
              {(weatherData.main.temp - 273.15).toFixed(1)}°
            </DegreeText>
            <DegreeSubtext
              first={weatherData.weather[0].description}
              second={(weatherData.main.feels_like - 273.15).toFixed(1)}
            ></DegreeSubtext>
          </WeatherDataDegree>
          <WeatherDataAddInfo>
            <AddInfoItem string={weatherData.wind.speed}>
              <Img1 />
            </AddInfoItem>
            <AddInfoItem string={weatherData.main.humidity}>
              <Img2 />
            </AddInfoItem>
            <AddInfoItem string={weatherData.main.pressure}>
              <Img3 />
            </AddInfoItem>
          </WeatherDataAddInfo>
        </WeatherData>
      </MainContainer>
    </MainEl>
  );
};
