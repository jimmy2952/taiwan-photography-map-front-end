import React from "react";
import { Link } from "react-router-dom";

import CityScapeCard from "../components/CityScapeCard";
import classes from "./CityDetail.module.css"

const CityDetail = (props) => {
  console.log(props.location);
  return (
    <section className={classes.CityDetail}>
      <h1>{props.location.state.cityName}</h1>
      <div className={classes.CityCardContainer}>
      <Link to={{pathname: `${props.location.pathname}/jiufeng`}}><CityScapeCard /></Link> 
      <CityScapeCard />
      <CityScapeCard />
      <CityScapeCard />
      <CityScapeCard />
      <CityScapeCard />
      <CityScapeCard />
      <CityScapeCard />
      <CityScapeCard />
      </div>
    </section>
  );
};

export default CityDetail;
