import React from "react";

const cityDetail = (props) => {
  console.log(props.location.state);
  return <h1>{props.location.state.cityName}</h1>;
};

export default cityDetail;
