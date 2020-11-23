import React, { useState } from "react";

import ImageUpload from "../shared/components/UIElements/ImageUpload";
import Input from "../shared/components/UIElements/Input";
import Button from "../shared/components/UIElements/Button";
import districtLonLat from "../utils/taiwan_district_lon_lat.json";
import cityName from "../utils/taiwanCityName.json";
import { VALIDATOR_NONE, VALIDATOR_REQUIRE } from "../utils/validators";
import { useForm } from "../shared/hook/form-hook";
import classes from "./Upload.module.css";

const Upload = (props) => {
  const [formState, inputHandler, setFormData] = useForm(
    {
      imageTitle: {
        value: "",
        isValid: false,
      },
      imageDescription: {
        value: "",
        isValid: true,
      },
      imageCategory: {
        value: "",
        isValid: true,
      },
      imageCityLocation: {
        value: "",
        isValid: true,
      },
      imageDistrictLocation: {
        value: "",
        isValid: true,
      },
      imageScapeName: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const uploadImageHandler = (event) => {
    event.preventDefault();
    console.log(formState);
  };

  return (
    <section className={classes.Upload}>
      <form onSubmit={uploadImageHandler}>
        <div className={classes.Container2} style={{ margin: "0 auto" }}>
          <Input
            element="input"
            id="imageTitle"
            type="text"
            label="作品標題(必填)"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="請輸入標題"
            onInput={inputHandler}
          />
          <Input
            id="imageDescription"
            label="作品描述"
            initialValid={true}
            element="textarea"
            validators={[VALIDATOR_NONE()]}
            onInput={inputHandler}
          />
          <Input
            id="imageCategory"
            label="拍攝類別(必選)"
            element="select"
            onInput={inputHandler}
            validators={[VALIDATOR_NONE()]}
          >
            <option>請選擇類別</option>
            <option>風景</option>
            <option>人像</option>
          </Input>
          <Input
            id="imageCityLocation"
            label="拍攝地點(必選)"
            element="select"
            onInput={inputHandler}
            validators={[VALIDATOR_NONE()]}
          >
            {cityName.map((cityItem, index) => {
              return (
                <option key={index} value={cityItem.cityName}>
                  {cityItem.cityName}
                </option>
              );
            })}
          </Input>
          <Input
            id="imageDistrictLocation"
            element="select"
            onInput={inputHandler}
            validators={[VALIDATOR_NONE()]}
          >
            {districtLonLat.map((districtItem, index) => {
              return districtItem.cityName ===
                formState.inputs.imageCityLocation.value ? (
                <option key={index} value={districtItem.districtName}>
                  {districtItem.districtName}
                </option>
              ) : (
                false
              );
            })}
          </Input>

          <Input
            element="input"
            id="imageScapeName"
            type="text"
            label="景點名稱(必填)"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="請輸入景點名稱"
            onInput={inputHandler}
          />
          <div>
            <Button type="submit" disabled={!formState.isValid}>
              上傳
            </Button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Upload;
