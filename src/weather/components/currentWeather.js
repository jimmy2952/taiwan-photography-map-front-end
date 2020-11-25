import React, { useState, useEffect } from "react";

import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";

import classes from "./CurrentWeather.module.css";
import { symbolHandler } from "../../utils/importWeatherSymbol";
import { useHttpClient } from "../../shared/hook/http-hook";

const CurrentWeather = (props) => {
  console.log(props.districtLonLat.lon, props.districtLonLat.lat);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const date = new Date();
  const currentTime = new Intl.DateTimeFormat("zh-TW", {
    date: "numeric",
    hour: "numeric",
    minute: "numeric",
  }).format(date);
  const currentDate = new Intl.DateTimeFormat("zh-TW").format(date);
  const [weatherData, setWeatherData] = useState({
    temperature: "-",
    feelsLikeTemp: "-",
    relHumidity: "-",
    windSpeed: "-",
    precipProb: "-",
    precipRate: "-",
    visibility: "-",
    uvIndex: "-",
  });

  useEffect(() => {
    if (props.districtLonLat.lon !== "-") {
      const fetchCurrentWeather = async () => {
        try {
          const responseData = await sendRequest(
            `https://pfa.foreca.com/api/v1/current/${props.districtLonLat.lon},${props.districtLonLat.lat}`,
            "GET",
            null,
            {
              Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
            }
          );
          console.log(responseData);
          setWeatherData(responseData.current);
        } catch (err) {}
      };

      fetchCurrentWeather();
    }
    return;
  }, [sendRequest, props.districtLonLat]);

  console.log(weatherData);

  return isLoading ? (
    <div className="center">
      <LoadingSpinner />
    </div>
  ) : (
    <div className={classes.CurrentWeather}>
      <ErrorModal error={error} onClear={clearError} />
      <div className={classes.CurrentTime}>
        <h2>{`${props.city === "縣市" ? "-" : props.city} ${
          props.district ? props.district : "-"
        }`}</h2>
        現在時間：{currentDate} {currentTime}
      </div>
      <div className={classes.SecondColumn}>
        <div className={classes.TemperatureContainer}>
          <p>溫度：</p>
          <div
            className={classes.Temperature}
          >{`${weatherData.temperature}°C`}</div>
          <div
            style={{ fontSize: "1.6rem" }}
          >{`體感溫度：${weatherData.feelsLikeTemp}°C`}</div>
        </div>
        <div className={classes.WeatherImage}>
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            天氣：
            {weatherData.symbol && (
              <img
                src={symbolHandler(weatherData.symbol)}
                alt="weatherSymbol"
              />
            )}
          </div>
          <div>{`濕度：${weatherData.relHumidity}%`}</div>
          <div>{`風速：${weatherData.windSpeed} m/s`}</div>
          <div>{`降雨機率：${weatherData.precipProb} %`}</div>
          <div>{`降雨量：${weatherData.precipRate} mm/hr`}</div>
          <div>{`能見度：${weatherData.visibility} m`}</div>
          <div>{`紫外線指數：${weatherData.uvIndex}`}</div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
