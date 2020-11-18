import React, { useState } from "react";

import CurrentWeather from "../components/CurrentWeather";
import HourWeather from "../components/HourWeather";
import WeekWeather from "../components/WeekWeather";
import classes from "./WeatherPage.module.css";

const WeatherPage = (props) => {
  const [showState, setShowState] = useState({
    showCurrentWeather: true,
    showHourWeather: false,
    showWeekWeather: false,
  });

  const showCurrentWeatherHandler = () => {
    setShowState((prevStat) => {
      return {
        showCurrentWeather: true,
        showHourWeather: false,
        showWeekWeather: false,
      };
    });
  };

  const showHourWeatherHandler = () => {
    setShowState((prevStat) => {
      return {
        showCurrentWeather: false,
        showHourWeather: true,
        showWeekWeather: false,
      };
    });
  };

  const showWeekWeatherHandler = () => {
    setShowState((prevStat) => {
      return {
        showCurrentWeather: false,
        showHourWeather: false,
        showWeekWeather: true,
      };
    });
  };

  return (
    <div className={classes.WeatherPage}>
      <h1>想出門拍照嗎？先看看天氣如何吧！</h1>
      <section>
        <nav>
          <ul>
            <li onClick={showCurrentWeatherHandler}>現在天氣</li>
            <li onClick={showHourWeatherHandler}>每小時預報</li>
            <li onClick={showWeekWeatherHandler}>一週預報</li>
          </ul>
        </nav>
        {showState.showCurrentWeather && <CurrentWeather />}
        {showState.showHourWeather && <HourWeather />}
        {showState.showWeekWeather && <WeekWeather />}
      </section>
    </div>
  );
};

export default WeatherPage;
