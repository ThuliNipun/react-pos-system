import React, { useState } from "react";
import classes from "./FoodTypeTile.module.css";

const FoodTypeTile = (props) => {
  const [mouseState, setMouseEntered] = useState(false);

  const mouseEnterHandler = () => {
    setMouseEntered(true);
  };

  const mouseLeaveHandler = () => {
    setMouseEntered(false);
  };

  return (
    <div
      className={classes.outer}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      style={{
        backgroundColor: !mouseState ? props.defColor : props.onColor,
      }}
    >
      <img className={classes.smallIcon} src={props.source} alt="" />
      <div className={classes.titleHolder}>
        <span className={classes.mainTitle}>{props.heading}</span>
        <span className={classes.subTitle}>{props.sub}</span>
      </div>
    </div>
  );
};

export default FoodTypeTile;
