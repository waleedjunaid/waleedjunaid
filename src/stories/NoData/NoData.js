import React from "react";
import classes from "./noData.module.css";
import Lottie from "lottie-react";
import animationData from "../../assets/animation/noData.json";
import { ImSearch } from "react-icons/im";

function NoData({ text = "No Data Found", animationPath = animationData }) {
  return (
    <div className={classes.noDataContainer}>
      {/* <Lottie
        style={{
          width: "50%",
          height: "100%",
        }}
        rendererSettings={{
          preserveAspectRatio: "xMidYMid slice",
        }}
        loop={true}
        autoplay={true}
        animationData={animationPath}
      /> */}
      <ImSearch size={60} color={"var(--main-color)"} />
      <p>{text}</p>
    </div>
  );
}

export default NoData;
