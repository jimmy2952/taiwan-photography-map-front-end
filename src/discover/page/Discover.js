import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useHttpClient } from "../../shared/hook/http-hook";
import classes from "./Discover.module.css";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";

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
      <ErrorModal error={error} onClear={clearError} />
      <section className={classes.Discover}>
        {imagesData &&
          imagesData.images.map((image) => {
            return (
              <div key={Math.random()}>
                <Link
                  to={`map/${image.imageCityLocation}/${image.imageScapeName}`}
                >
                  {
                    <img
                      src={`${process.env.REACT_APP_BACKEND_URL}/api/images/get-image/${image.id}`}
                    />
                  }
                </Link>

                <p style={{ textAlign: "center" }}>
                  <Link
                    to={`map/${image.imageCityLocation}/${image.imageScapeName}`}
                  >
                    <span>{image.imageScapeName}</span>
                  </Link>
                </p>
              </div>
            );
          })}
      </section>
    </>
  );
};

export default Discover;
