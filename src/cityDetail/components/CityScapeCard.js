import React from "react";

import image from "../../assets/001.jpg";
import classes from "./CityScapeCard.module.css"

const CityScapeCard = (props) => {
  return (
    <div className={classes.CityScapeCard}>
      <div>
      <img src={`${process.env.REACT_APP_BACKEND_URL}/api/images/get-image/${props.imageId}`} />
      </div>
      <div className={classes.ImageInformation}>
        <span>{props.scapeName}</span>
      </div>
    </div>
  );
};

export default CityScapeCard;
