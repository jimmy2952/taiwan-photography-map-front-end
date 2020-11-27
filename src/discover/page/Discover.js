import React, { useEffect, useState } from "react";

import { useHttpClient } from "../../shared/hook/http-hook";
import classes from "./Discover.module.css";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";

const Discover = (props) => {
  const [imagesData, setImagesData] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/api/images`,
          "GET"
        );
        setImagesData(responseData);
      } catch (err) {}
    };
    fetchImages();
  }, []);
  console.log(imagesData);
  return (
    <>
      {isLoading && (
        <div>
          <LoadingSpinner asOverlay />
        </div>
      )}
      <section className={classes.Discover}>
        {imagesData &&
          imagesData.images.map((image) => {
            return (
              <div key={Math.random()}>
                <img
                  src={`${process.env.REACT_APP_BACKEND_URL}/${image.image}`}
                />
                <p style={{ textAlign: "center" }}>{image.imageScapeName}</p>
              </div>
            );
          })}
      </section>
    </>
  );
};

export default Discover;
