import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";

import ScapeDetailCard from "../components/ScapeDetailCard";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import { useHttpClient } from "../../shared/hook/http-hook";
import classes from "./ScapeDetail.module.css";

const ScapeDetail = (props) => {
  const { city, scape } = useParams();
  const [imagesData, setImagesData] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/api/images/${city}/${scape}`,
          "GET"
        );
        setImagesData(responseData);
      } catch (err) {}
    };
    fetchImages();
  }, []);
  console.log(imagesData);
  return (
    <section className={classes.ScapeDetail}>
      <LightgalleryProvider lightgallerySettings={{
        thumbnail: false,
        download: false,

      }}>
        {isLoading && (
          <div>
            <LoadingSpinner asOverlay />
          </div>
        )}
        <ErrorModal error={error} onClear={clearError} />
        <h1>{scape}</h1>
        <div className={classes.ScapeCardContainer}>
          {imagesData &&
            imagesData.images.map((image) => {
              return (
                <ScapeDetailCard
                  image={image.image}
                  imageTitle={image.imageTitle}
                  imageId={image.id}
                  key={Math.random()}
                />
              );
            })}
        </div>
      </LightgalleryProvider>
    </section>
  );
};

export default ScapeDetail;
