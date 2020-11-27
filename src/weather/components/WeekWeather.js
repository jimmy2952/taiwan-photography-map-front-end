import React, { useState, useEffect } from "react";

import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import classes from "./WeekWeather.module.css";
import { symbolHandler } from "../../utils/importWeatherSymbol";
import { useHttpClient } from "../../shared/hook/http-hook";

const WeakWeather = (props) => {
  console.log("render week weather");
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [weekData, setWeekData] = useState();

  useEffect(() => {
    if (props.districtLonLat.lat !== "-") {
      const fetchCurrentWeather = async () => {
        try {
          const responseData = await sendRequest(
            `https://pfa.foreca.com/api/v1/forecast/daily/${props.districtLonLat.lon},${props.districtLonLat.lat}?dataset=full`,
            "GET",
            null,
            {
              Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
            }
          );
          console.log(responseData);
          setWeekData(responseData);
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
          <span>天氣</span>
        </div>
        <div>
          <span>最高溫</span>
        </div>
        <div>
          <span>最低溫</span>
        </div>
        <div>
          <span>降雨機率</span>
        </div>
        <div>
          <span>累積降雨量</span>
        </div>
        <div>
          <span>日出</span>
        </div>
        <div>
          <span>日落</span>
        </div>
      </div>
      {isLoading && weekData ? (
        <div className="center">
          <LoadingSpinner />
        </div>
      ) : (
        weekData && weekData.forecast.map((weekDataItem) => {
          const data = new Date(weekDataItem.date);
          const currentDate = data.getMonth() + 1 + "/" + data.getDate();

          return (
            <div className={classes.DataContainer} key={Math.random()}>
              <div>
                <span>{`${currentDate}`}</span>
              </div>
              <div>
                <span>
                  <img
                    src={symbolHandler(weekDataItem.symbol)}
                    alt="weatherSymbol"
                  />
                </span>
              </div>
              <div>
                <span>{`${weekDataItem.maxTemp} °C`}</span>
              </div>
              <div>
                <span>{`${weekDataItem.minTemp} °C`}</span>
              </div>
              <div>
                <span>{`${weekDataItem.precipProb} %`}</span>
              </div>
              <div>
                <span>{`${weekDataItem.precipAccum}mm/hr`}</span>
              </div>
              <div>
                <span>{`${weekDataItem.sunrise}`}</span>
              </div>
              <div>
                <span>{`${weekDataItem.sunset}`}</span>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default WeakWeather;
