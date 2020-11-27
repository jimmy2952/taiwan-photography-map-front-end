import React, { useEffect, useState } from "react";

import CurrentWeather from "../components/CurrentWeather";
import HourWeather from "../components/HourWeather";
import WeekWeather from "../components/WeekWeather";
import districtLonLat from "../../utils/taiwan_district_lon_lat.json";
import cityName from "../../utils/taiwanCityName.json";
import classes from "./WeatherPage.module.css";

const WeatherPage = (props) => {
  const [lonLat, setLonLat] = useState({
    lon: "-",
    lat: "-",
  });
  // let long
  // let lati

  // navigator.geolocation.getCurrentPosition((position) => {
  //   long = position.coords.longitude
  //   lati = position.coords.latitude
  //   console.log(long)
  // })

  const [cityDistrictValue, setCityDistrictValue] = useState({
    city: "台北市",
    district: "信義區",
  });

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
    console.log(lonLat);
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

  const cityValueHandler = (event) => {
    setCityDistrictValue({ city: event.target.value, district: null });
  };

  const districtHandler = (event) => {
    setCityDistrictValue((prevStat) => {
      return {
        ...prevStat,
        district: event.target.value,
      };
    });
    const districtData = districtLonLat.filter((district) => {
      return (
        district.cityName === cityDistrictValue.city &&
        event.target.value === district.districtName
      );
    });

    setLonLat({
      lon: Number(districtData[0].lon).toFixed(2),
      lat: Number(districtData[0].lat).toFixed(2),
    });
  };

  const myLocationHandler = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLonLat({
        lon: position.coords.longitude.toFixed(2),
        lat: position.coords.latitude.toFixed(2),
      });
    });
    setCityDistrictValue(prevStat => {
      return {
        ...prevStat,
        city: "現在",
        district: "位置"
      }
    })
    console.log(lonLat);
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
        <div style={{ textAlign: "center", marginTop: "1rem" }}>
          <button onClick={myLocationHandler}>{`使用我的位置`}</button>
          <select onChange={cityValueHandler}>
            {cityName.map((cityItem, index) => {
              return (
                <option key={index} value={cityItem.cityName}>
                  {cityItem.cityName}
                </option>
              );
            })}
          </select>
          <select onChange={districtHandler}>
            {districtLonLat.map((districtItem, index) => {
              return districtItem.cityName === cityDistrictValue.city ? (
                <option key={index}>{districtItem.districtName}</option>
              ) : (
                false
              );
            })}
          </select>
        </div>
        <div
          style={{ textAlign: "center", marginTop: "1rem" }}
        >{`現在位置：${lonLat.lon}, ${lonLat.lat}`}</div>
        {showState.showCurrentWeather && (
          <CurrentWeather
            city={cityDistrictValue.city}
            district={cityDistrictValue.district}
            districtLonLat={lonLat}
          />
        )}
        {showState.showHourWeather && <HourWeather districtLonLat={lonLat} />}
        {showState.showWeekWeather && <WeekWeather districtLonLat={lonLat} />}
      </section>
    </div>
  );
};

export default WeatherPage;
