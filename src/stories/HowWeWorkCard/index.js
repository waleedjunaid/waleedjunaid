import React from "react";
import classes from "./HowWeWorkCard.module.css";
import PropTypes from "prop-types";
import { HowWeWorkImg } from "../../constant/imagePath";

export const HowWeWorkCard = ({
  img,
  stepNo,
  title,
  description,
  isBoxShadow,
  textColor,
}) => {
  return (
    <div className={[classes.HowWeWorkCardDiv]}>
      <div
        className={[classes.imgDiv, isBoxShadow && classes.boxShadow].join(" ")}
      >
        <div className={[classes.imgInnerDiv].join(" ")}>
          <img src={img && img} alt="..." />
        </div>
      </div>
      <div>
        {/* <p className={[classes.stepNumber].join(" ")} style={{ color: textColor }} >
          {stepNo && stepNo}
        </p> */}
        <h4 className={[classes.title].join(" ")} style={{ color: textColor }}>
          {title && title}
        </h4>
        <p
          className={["reg", classes.description].join(" ")}
          style={{ color: textColor }}
        >
          {description && description}
        </p>
      </div>
    </div>
  );
};
HowWeWorkCard.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  stepNo: PropTypes.string,
  isBoxShadow: PropTypes.bool,
  textColor: PropTypes.string,
};
HowWeWorkCard.defaultProps = {
  isBoxShadow: true,
  img: HowWeWorkImg,
  stepNo: "01",
  title: "Create Account",
  description:
    "Our customizable templates make it easy to write your job description. Then, with just one click, we send your job out to 100+ top job sites.",
  textColor: "var(--text-color-black)",
};
