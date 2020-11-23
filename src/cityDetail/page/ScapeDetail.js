import React from "react";

import ScapeDetailCard from "../components/ScapeDetailCard"
import classes from "./ScapeDetail.module.css"

const ScapeDetail = (props) => {
  return (
    <section className={classes.ScapeDetail}>
      <h1>九份</h1>
      <div className={classes.ScapeCardContainer}>

          <ScapeDetailCard />

        <ScapeDetailCard />
        <ScapeDetailCard />
        <ScapeDetailCard />
        <ScapeDetailCard />
        <ScapeDetailCard />
        <ScapeDetailCard />
        <ScapeDetailCard />
        <ScapeDetailCard />
      </div>
    </section>
  );
};

export default ScapeDetail;
