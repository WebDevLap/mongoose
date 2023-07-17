import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  weatherData: {
    name: "",
    coord: {
      lon: "",
      lat: "",
    },
    main: {
      temp: 0,
      feels_like: 0,
      humidity: 0,
      pressure: 0,
    },
    wind: {
      speed: 0,
    },
    weather: [
      {
        description: "",
      },
    ],
  },
};

const WeatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setWeatherData: (state, action) => {
      state.weatherData = action.payload;
    },
  },
});

export const { setWeatherData } = WeatherSlice.actions;
export default WeatherSlice.reducer;
