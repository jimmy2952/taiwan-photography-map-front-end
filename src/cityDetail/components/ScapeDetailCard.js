import React from "react";

import image from "../../assets/001.jpg";
import classes from "./ScapeDetailCard.module.css"

const ScapeDetailCard = (props) => {
  return (
    <div className={classes.ScapeDetailCard}>
      <div className={classes.ImageContainer}>
      <img src={`${process.env.REACT_APP_BACKEND_URL}/${props.image}`} />
      </div>
      <div className={classes.ImageInformation}>
        <div>
          
        </div>
        <span>{props.imageTitle}</span>
      </div>
    </div>
  );
};

export default ScapeDetailCard;
