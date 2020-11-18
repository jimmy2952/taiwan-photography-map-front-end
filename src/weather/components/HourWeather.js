import React, { useState } from "react";

import classes from "./HourWeather.module.css";

const HourWeather = (props) => {
  const [hourData, setHourData] = useState({
    forecast: [
      {
        time: "2020-03-16T14:00+01:00",
        symbol: "d410",
        temperature: 14,
        feelsLikeTemp: 14,
        windSpeed: 4,
        windGust: 12,
        windDir: 54,
        windDirString: "NE",
        precipProb: 76,
        precipAccum: 0.04,
      },
      {
        time: "2020-03-16T15:00+01:00",
        symbol: "d410",
        temperature: 15,
        feelsLikeTemp: 15,
        windSpeed: 4,
        windGust: 12,
        windDir: 56,
        windDirString: "NE",
        precipProb: 69,
        precipAccum: 0.04,
      },
      {
        time: "2020-03-16T16:00+01:00",
        symbol: "d410",
        temperature: 15,
        feelsLikeTemp: 15,
        windSpeed: 4,
        windGust: 13,
        windDir: 59,
        windDirString: "NE",
        precipProb: 62,
        precipAccum: 0.07,
      },
      {
        time: "2020-03-16T16:00+01:00",
        symbol: "d410",
        temperature: 15,
        feelsLikeTemp: 15,
        windSpeed: 4,
        windGust: 13,
        windDir: 59,
        windDirString: "NE",
        precipProb: 62,
        precipAccum: 0.07,
      },
      {
        time: "2020-03-16T16:00+01:00",
        symbol: "d410",
        temperature: 15,
        feelsLikeTemp: 15,
        windSpeed: 4,
        windGust: 13,
        windDir: 59,
        windDirString: "NE",
        precipProb: 62,
        precipAccum: 0.07,
      },
      {
        time: "2020-03-16T16:00+01:00",
        symbol: "d410",
        temperature: 15,
        feelsLikeTemp: 15,
        windSpeed: 4,
        windGust: 13,
        windDir: 59,
        windDirString: "NE",
        precipProb: 62,
        precipAccum: 0.07,
      },
      {
        time: "2020-03-16T16:00+01:00",
        symbol: "d410",
        temperature: 15,
        feelsLikeTemp: 15,
        windSpeed: 4,
        windGust: 13,
        windDir: 59,
        windDirString: "NE",
        precipProb: 62,
        precipAccum: 0.07,
      },
      {
        time: "2020-03-16T16:00+01:00",
        symbol: "d410",
        temperature: 15,
        feelsLikeTemp: 15,
        windSpeed: 4,
        windGust: 13,
        windDir: 59,
        windDirString: "NE",
        precipProb: 62,
        precipAccum: 0.07,
      },
      {
        time: "2020-03-16T16:00+01:00",
        symbol: "d410",
        temperature: 15,
        feelsLikeTemp: 15,
        windSpeed: 4,
        windGust: 13,
        windDir: 59,
        windDirString: "NE",
        precipProb: 62,
        precipAccum: 0.07,
      },
      {
        time: "2020-03-16T16:00+01:00",
        symbol: "d410",
        temperature: 15,
        feelsLikeTemp: 15,
        windSpeed: 4,
        windGust: 13,
        windDir: 59,
        windDirString: "NE",
        precipProb: 62,
        precipAccum: 0.07,
      },
      {
        time: "2020-03-16T16:00+01:00",
        symbol: "d410",
        temperature: 15,
        feelsLikeTemp: 15,
        windSpeed: 4,
        windGust: 13,
        windDir: 59,
        windDirString: "NE",
        precipProb: 62,
        precipAccum: 0.07,
      },
      {
        time: "2020-03-16T16:00+01:00",
        symbol: "d410",
        temperature: 15,
        feelsLikeTemp: 15,
        windSpeed: 4,
        windGust: 13,
        windDir: 59,
        windDirString: "NE",
        precipProb: 62,
        precipAccum: 0.07,
      },
      {
        time: "2020-03-16T16:00+01:00",
        symbol: "d410",
        temperature: 15,
        feelsLikeTemp: 15,
        windSpeed: 4,
        windGust: 13,
        windDir: 59,
        windDirString: "NE",
        precipProb: 62,
        precipAccum: 0.07,
      },
      {
        time: "2020-03-16T16:00+01:00",
        symbol: "d410",
        temperature: 15,
        feelsLikeTemp: 15,
        windSpeed: 4,
        windGust: 13,
        windDir: 59,
        windDirString: "NE",
        precipProb: 62,
        precipAccum: 0.07,
      },
      {
        time: "2020-03-16T16:00+01:00",
        symbol: "d410",
        temperature: 15,
        feelsLikeTemp: 15,
        windSpeed: 4,
        windGust: 13,
        windDir: 59,
        windDirString: "NE",
        precipProb: 62,
        precipAccum: 0.07,
      },
      {
        time: "2020-03-16T16:00+01:00",
        symbol: "d410",
        temperature: 15,
        feelsLikeTemp: 15,
        windSpeed: 4,
        windGust: 13,
        windDir: 59,
        windDirString: "NE",
        precipProb: 62,
        precipAccum: 0.07,
      },
      {
        time: "2020-03-16T16:00+01:00",
        symbol: "d410",
        temperature: 15,
        feelsLikeTemp: 15,
        windSpeed: 4,
        windGust: 13,
        windDir: 59,
        windDirString: "NE",
        precipProb: 62,
        precipAccum: 0.07,
      },
      {
        time: "2020-03-16T16:00+01:00",
        symbol: "d410",
        temperature: 15,
        feelsLikeTemp: 15,
        windSpeed: 4,
        windGust: 13,
        windDir: 59,
        windDirString: "NE",
        precipProb: 62,
        precipAccum: 0.07,
      },
    ],
  });
  const weekDayTransfer = [
    "星期日",
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六",
  ];
  

  return (
    <div className={classes.HourWeather}>
      <div className={classes.TitleContainer}>
        <div>
          <span>日期</span>
        </div>
        <div>
          <span>時間</span>
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
      </div>
      {hourData.forecast.map((hourDataItem) => {
        const data = new Date(hourDataItem.time);
        const currentDate = (data.getMonth() + 1) + "/" + data.getDate();
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
          <div className={classes.DataContainer} key={Math.random()}>
            <div>
              <span>{`${currentDate}(${weekDayHandler()})`}</span>
            </div>
            <div>
              <span>{hourMinute}</span>
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
          </div>
        );
      })}
    </div>
  );
};

export default HourWeather;
