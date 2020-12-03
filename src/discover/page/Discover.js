import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import { useHttpClient } from "../../shared/hook/http-hook";
import { useScroll } from "../../shared/hook/scroll-hook";
import classes from "./Discover.module.css";

const Discover = (props) => {
  const [imagesData, setImagesData] = useState();
  const [skip, setSkip] = useState(0)
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const { offset, top, height } = useScroll();

  useEffect(() => {
    console.log(Math.random())
    const fetchImages = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/api/images?skip=${skip}`,
          "GET"
        );
        const newData = responseData.images
        if (imagesData) {
          setImagesData([...imagesData, ...newData])
        } else {
          setImagesData(responseData.images)
        }
      } catch (err) {}
    };
    fetchImages();
  }, [skip]);

  useEffect(() => {
    if (offset + top === height) {
      setSkip(imagesData.length)
    }
  }, [top])

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
          imagesData.map((image) => {
            return (
              <div key={Math.random()}>
                <div className={classes.ImagePlaceholderContainer}>
                  <Link
                    to={`map/${image.imageCityLocation}/${image.imageScapeName}`}
                  >
                    <img
                      src={`${process.env.REACT_APP_BACKEND_URL}/api/images/get-image/${image.id}`}
                    />
                  </Link>
                </div>

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
