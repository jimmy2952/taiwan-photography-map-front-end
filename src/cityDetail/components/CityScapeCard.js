import React from "react";

import image from "../../assets/001.jpg";
import classes from "./CityScapeCard.module.css"

const CityScapeCard = (props) => {
  return (
    <div className={classes.CityScapeCard}>
      <div>
      <img src={image} />
      </div>
      <div className={classes.ImageInformation}>
        <span>九份：共3張照片</span>
      </div>
    </div>
  );
};

export default CityScapeCard;
