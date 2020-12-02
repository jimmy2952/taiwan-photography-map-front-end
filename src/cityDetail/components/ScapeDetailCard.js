import React from "react";
import {
  LightgalleryItem,
} from "react-lightgallery";

import classes from "./ScapeDetailCard.module.css";

const PhotoItem = ({ image, thumb, group }) => (
    <LightgalleryItem group={group} src={image} thumb={thumb}>
      <img src={image} style={{ width: "100%", cursor: "pointer" }} />
    </LightgalleryItem>
);

const ScapeDetailCard = (props) => {
  console.log(props.imageId);
  return (
    <div className={classes.ScapeDetailCard}>
      <div className={classes.ImageContainer}>
        {/* <img
          src={`${process.env.REACT_APP_BACKEND_URL}/api/images/get-image/${props.imageId}`}
        /> */}
        <PhotoItem image={`${process.env.REACT_APP_BACKEND_URL}/api/images/get-image/${props.imageId}`} />
      </div>
      <div className={classes.ImageInformation}>
        <div></div>
        <span>{props.imageTitle}</span>
      </div>
    </div>
  );
};

export default ScapeDetailCard;
