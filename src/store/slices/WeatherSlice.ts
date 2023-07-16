import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  weatherData: {
    name: ''
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
