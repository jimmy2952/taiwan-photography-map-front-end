import React, { useEffect, useState } from "react";

import ScapeDetailCard from "../components/ScapeDetailCard";
import { useHttpClient } from "../../shared/hook/http-hook";
import classes from "./ScapeDetail.module.css";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";

const ScapeDetail = (props) => {
  const cityName = props.location.state.cityName
  const scapeName = props.location.state.scapeName;
  const [imagesData, setImagesData] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/api/images/${cityName}/${scapeName}`,
          "GET"
        );
        setImagesData(responseData);
      } catch (err) {}
    };
    fetchImages();
  }, []);
  console.log(imagesData)
  return (
    <section className={classes.ScapeDetail}>
      {isLoading && <div><LoadingSpinner asOverlay /></div>}
      <h1>{scapeName}</h1>
      <div className={classes.ScapeCardContainer}>
        {imagesData && imagesData.images.map(image => {
          return (
            <ScapeDetailCard image={image.image} imageTitle={image.imageTitle} />
          )
        })}
      </div>
    </section>
  );
};

export default ScapeDetail;
