import React, { useState, useEffect } from "react";

import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import classes from "./HourWeather.module.css";
import { symbolHandler } from "../../utils/importWeatherSymbol";
import { useHttpClient } from "../../shared/hook/http-hook";

const HourWeather = (props) => {
  console.log("render hourWeather");
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [hourData, setHourData] = useState();
  const weekDayTransfer = [
    "星期日",
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六",
  ];

  useEffect(() => {
    if (props.districtLonLat.lat !== "-") {
      const fetchCurrentWeather = async () => {
        try {
          const responseData = await sendRequest(
            `https://pfa.foreca.com/api/v1/forecast/hourly/${props.districtLonLat.lon},${props.districtLonLat.lat}`,
            "GET",
            null,
            {
              Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
            }
          );
          console.log(responseData);
          setHourData(responseData);
        } catch (err) {}
      };

      fetchCurrentWeather();
    }
    return;
  }, [sendRequest, props.districtLonLat]);

  return (
    <div className={classes.HourWeather}>
      <ErrorModal error={error} onClear={clearError} />
      <div className={classes.TitleContainer}>
        <div>
          <span>日期</span>
        </div>
        <div>
          <span>時間</span>
        </div>
        <div>
          <span>天氣</span>
        </div>
        <div>
          <span>溫度</span>
        </div>
        <div>
          <span>風速</span>
        </div>
        <div>
          <span>降雨機率</span>
        </div>
        <div>
          <span>降雨量</span>
        </div>
        <div>
          <span>紫外線指數</span>
        </div>
      </div>
      {isLoading && hourData ? (
        <div className="center">
          <LoadingSpinner />
        </div>
      ) : (
        hourData.forecast.map((hourDataItem) => {
          const data = new Date(hourDataItem.time);
          const currentDate = data.getMonth() + 1 + "/" + data.getDate();
          const hourMinute = new Intl.DateTimeFormat("zh-TW", {
            date: "numeric",
            hour: "numeric",
            minute: "numeric",
          }).format(data);

          const weekDayHandler = () => {
            const weekDay = data.getDay();
            return weekDayTransfer[weekDay];
          };
          return (
            hourDataItem && (
              <div className={classes.DataContainer} key={Math.random()}>
                <div>
                  <span>{`${currentDate}(${weekDayHandler()})`}</span>
                </div>
                <div>
                  <span>{hourMinute}</span>
                </div>
                <div>
                  <span>
                    <img
                      src={symbolHandler(hourDataItem.symbol)}
                      alt="weatherSymbol"
                    />
                  </span>
                </div>
                <div>
                  <span>{`${hourDataItem.temperature} °C`}</span>
                </div>
                <div>
                  <span>{`${hourDataItem.windSpeed} m/s`}</span>
                </div>
                <div>
                  <span>{`${hourDataItem.precipProb} %`}</span>
                </div>
                <div>
                  <span>{`${hourDataItem.precipAccum} mm/hr`}</span>
                </div>
                <div>
                  <span>{`3`}</span>
                </div>
              </div>
            )
          );
        })
      )}
    </div>
  );
};

export default HourWeather;
