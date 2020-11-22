import React, { useState } from "react";

import ImageUpload from "../shared/components/UIElements/ImageUpload";
import Button from "../shared/components/UIElements/Button";
import districtLonLat from "../utils/taiwan_district_lon_lat.json";
import cityName from "../utils/taiwanCityName.json";
import classes from "./Upload.module.css";

const Upload = (props) => {
  const [cityDistrictValue, setCityDistrictValue] = useState({
    city: "縣市",
    district: "-",
  });
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
  };

  return (
    <section className={classes.Upload}>
      <form>
        <div className={classes.Container1}>
          <ImageUpload />
        </div>
        <div className={classes.Container2} style={{marginLeft: "0"}}>
          <div>
            <label htmlFor="title">作品標題</label>
            <br />
            <input type="text" name="title" id="title"></input>
          </div>
          <div>
            <label htmlFor="description">作品描述</label>
            <br />
            <textarea
              type="text"
              name="description"
              id="description"
              rows="5"
            ></textarea>
          </div>
          <div>
            <label htmlFor="category">拍攝類別</label>
            <br />
            <select>
              <option>風景</option>
              <option>人像</option>
            </select>
          </div>
          <div>
            <label htmlFor="location">拍攝地點</label>
            <br />
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
          <div>
            <label htmlFor="scapeName">景點名稱</label>
            <br />
            <input type="text" name="scapeName" id="scapeName"></input>
          </div>
          <div>
            <Button>上傳</Button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Upload;
