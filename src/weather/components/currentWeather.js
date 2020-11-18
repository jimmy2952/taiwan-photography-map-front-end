import React, { useState } from "react";

import classes from "./currentWeather.module.css";
import weatherImage from "../../assets/weatherSymbolImage/[developer.foreca.com][191]d411.png";

const CurrentWeather = (props) => {
  const date = new Date();
  const currentTime = new Intl.DateTimeFormat("zh-TW", {
    date: "numeric",
    hour: "numeric",
    minute: "numeric",
  }).format(date);
  const currentDate = new Intl.DateTimeFormat("zh-TW").format(date);
  const [weatherData, setWeatherData] = useState({
    temperature: "35",
    feelsLikeTemp: "37",
    relHumidity: "70",
    windSpeed: "10",
    precipProb: "50",
    precipRate: "2.4",
    visibility: "10000",
    UVIndex: "3",
  });
  return (
    <div className={classes.CurrentWeather}>
      <div className={classes.CurrentTime}>
        <h2>台北市 中正區</h2>
        現在時間：{currentDate} {currentTime}
      </div>
      <div className={classes.SecondColumn}>
        <div className={classes.TemperatureContainer}>
          <p>溫度：</p>
          <div
            className={classes.Temperature}
          >{`${weatherData.temperature}°C`}</div>
          <div style={{fontSize: "1.6rem"}}>{`體感溫度：${weatherData.feelsLikeTemp}°C`}</div>
        </div>
        <div className={classes.WeatherImage}>
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            天氣：<img src={weatherImage} alt="weatherSymbol"></img>
          </div>
          <div>{`濕度：${weatherData.relHumidity}%`}</div>
          <div>{`風速：${weatherData.windSpeed} m/s`}</div>
          <div>{`降雨機率：${weatherData.precipProb} %`}</div>
          <div>{`降雨量：${weatherData.precipRate} mm/hr`}</div>
          <div>{`能見度：${weatherData.visibility} m`}</div>
          <div>{`紫外線指數：${weatherData.UVIndex}`}</div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
