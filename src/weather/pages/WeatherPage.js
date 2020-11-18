import React from "react";

import CurrentWeather from "../components/currentWeather"
import classes from "./WeatherPage.module.css";

const WeatherPage = (props) => {
  return (
    <div className={classes.WeatherPage}>
      <h1>想出門拍照嗎？先看看天氣如何吧！</h1>
      <section>
        <nav>
          <ul>
            <li>現在天氣</li>
            <li>每小時預報</li>
            <li>一週預報</li>
          </ul>
        </nav>
        <CurrentWeather />
      </section>
    </div>
  );
};

export default WeatherPage;
