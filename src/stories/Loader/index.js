import React from "react";
import classes from "./loader.module.css";
import Colors from "../../stories/assets/Colors";
import PropTypes from "prop-types";

import Lottie from "lottie-react";
import animationData from "../../assets/animation/search.json";

export const Loader = ({ animationPath = animationData }) => {
  return (
    <>
      <div className={`${classes.loaderContainer}`}>
        <Lottie
          style={{
            width: "100%",
            height: "100%",
          }}
          rendererSettings={{
            preserveAspectRatio: "xMidYMid slice",
          }}
          loop={true}
          autoplay={true}
          animationData={animationPath}
        />
      </div>
    </>
  );
};

Loader.propTypes = {
  animationPath: PropTypes.string,
};
