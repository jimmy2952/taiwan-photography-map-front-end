import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import ImageUpload from "../shared/components/UIElements/ImageUpload";
import Input from "../shared/components/UIElements/Input";
import Button from "../shared/components/UIElements/Button";
import districtLonLat from "../utils/taiwan_district_lon_lat.json";
import cityName from "../utils/taiwanCityName.json";
import { VALIDATOR_NONE, VALIDATOR_REQUIRE } from "../utils/validators";
import { useForm } from "../shared/hook/form-hook";
import { useHttpClient } from "../shared/hook/http-hook"
import { AuthContext } from "../shared/context/auth-context"
import classes from "./Upload.module.css";
import LoadingSpinner from "../shared/components/UIElements/LoadingSpinner";
import ErrorModal from "../shared/components/UIElements/ErrorModal"

const Upload = (props) => {
  const auth = useContext(AuthContext)
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

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

  const history = useHistory();

  const uploadImageHandler = async(event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("imageTitle", formState.inputs.imageTitle.value);
      formData.append("imageDescription", formState.inputs.imageDescription.value);
      formData.append("imageCategory", formState.inputs.imageCategory.value);
      formData.append("imageCityLocation", formState.inputs.imageCityLocation.value);
      formData.append("imageDistrictLocation", formState.inputs.imageDistrictLocation.value);
      formData.append("imageScapeName", formState.inputs.imageScapeName.value);
      formData.append("image", formState.inputs.image.value);
      formData.append("creator", auth.userId)
      await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/api/images`,
        "POST", formData, {
          Authorization: "Bearer " + auth.token
        }
      );
     history.push("/discover")
    } catch (err) {}
    console.log(formState.inputs)
  };

  return (
    <section className={classes.Upload}>
      {isLoading && <div><LoadingSpinner asOverlay/></div>}
      <ErrorModal error={error} onClear={clearError} />
      <form onSubmit={uploadImageHandler}>
        <div className={classes.Container1}>
          <ImageUpload
            id="image"
            onInput={inputHandler}
            errorText="請上傳照片"
          />
        </div>
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
