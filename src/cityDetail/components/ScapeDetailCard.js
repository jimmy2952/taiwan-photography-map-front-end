import React from "react";

import image from "../../assets/001.jpg";
import classes from "./ScapeDetailCard.module.css"

const ScapeDetailCard = (props) => {
  return (
    <div className={classes.ScapeDetailCard}>
      <div className={classes.ImageContainer}>
      <img src={image} />
      </div>
      <div className={classes.ImageInformation}>
        <div>
          
        </div>
        <span>最美銀河</span>
      </div>
    </div>
  );
};

export default ScapeDetailCard;
