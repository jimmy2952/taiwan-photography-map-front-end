import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import CityScapeCard from "../components/CityScapeCard";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import ErrorModal from "../../shared/components/UIElements/ErrorModal"
import { useHttpClient } from "../../shared/hook/http-hook";
import classes from "./CityDetail.module.css";

const CityDetail = (props) => {
  console.log("render");
  const [imagesData, setImagesData] = useState();
  const cityName = props.location.state.cityName;
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/api/images/${cityName}`,
          "GET"
        );
        setImagesData(responseData);
      } catch (err) {}
    };
    fetchImages();
  }, []);
  console.log(imagesData);
  return (
    <section className={classes.CityDetail}>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div>
          <LoadingSpinner asOverlay />
        </div>
      )}
      <h1>{cityName}</h1>
      <div className={classes.CityCardContainer}>
        {imagesData &&
          imagesData.scapes.map((image) => {
            return (
              <Link
                to={{
                  pathname: `${cityName}/${image.imageScapeName}`,
                  state: {
                    scapeName: image.imageScapeName,
                    cityName: cityName,
                  },
                }}
                key={Math.random()}
              >
                <CityScapeCard
                  scapeName={image.imageScapeName}
                  image={image.image}
                />
              </Link>
            );
          })}
      </div>
    </section>
  );
};

export default CityDetail;
