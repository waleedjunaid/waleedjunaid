import React, { useEffect, useState } from "react";
import zxcvbn from "zxcvbn";
import PropTypes from "prop-types";
import classes from "./passwordstrengthcheck.module.css";
import Fonts from "../assets/Fonts";
import Colors from "../assets/Colors";

export const PasswordStrengthCheck = ({
  maxCharLength,
  value,
  weakColor,
  mediumColor,
  strongColor,
  weakMessage,
  mediumMessage,
  strongMessage,
  setIsAllow,
}) => {
  const [minStrength, setMinStrength] = useState(3);
  const [strength, setStrength] = useState(0);
  const [message, setMessage] = useState("");

  const validatePasswordStrong = (value) => {
    if (value.length <= maxCharLength) {
      setStrength(0);
      setMessage(`Please use ${maxCharLength}+ characters for secure password`);
      if (setIsAllow) setIsAllow(false);
    } else if (zxcvbn(value).score < minStrength) {
      setStrength(zxcvbn(value).score == 0 ? 1 : zxcvbn(value).score);
      setMessage(weakMessage);
      if (setIsAllow) setIsAllow(true);
    } else if (zxcvbn(value).score == minStrength) {
      setStrength(3);
      setMessage(mediumMessage);
      if (setIsAllow) setIsAllow(true);
    } else if (zxcvbn(value).score > minStrength) {
      setStrength(4);
      setMessage(strongMessage);
      if (setIsAllow) setIsAllow(true);
    }
  };
  useEffect(() => {
    validatePasswordStrong(value);
  }, [value]);

  // const strengthClass = [
  //   `${[classes.strengthMeter].join(" ")} mt-2`,
  // value.length > 0 ? "visible" : "invisible",
  // ]
  //   .join(" ")
  //   .trim();

  return (
    <>
      <div className="form-group">
      {/* <div className="form-group pb-2"> */}
        <div className={`${[classes.strengthMeter].join(" ")} mt-2`}>
          <div
            className={`${[classes.strengthMeterFill].join(" ")}`}
            data-strength={strength}
            style={{
              backgroundColor:
                value.length == 0
                  ? Colors.neutralShadesOfWhisper
                  : strength == 0
                  ? Colors.additionalShadesOfBitterSweet
                  : strength == 1 || strength == 2
                  ? weakColor
                  : strength == 3
                  ? mediumColor
                  : strongColor,
            }}
          ></div>
        </div>

        {message.length > 0 && (
          <div
            // className={`font-weight-bold text-right m-0 mb-2 ${[
            className={`font-weight-bold text-right m-0 ${[
              classes.formHint,
            ].join(" ")}`}
            style={{
              ...Fonts.p2,
              color:
                value.length == 0
                  ? Colors.neutralShadesOfPinkSwan
                  : strength == 0
                  ? Colors.additionalShadesOfBitterSweet
                  : strength == 1 || strength == 2
                  ? weakColor
                  : strength == 3
                  ? mediumColor
                  : strongColor,
            }}
          >
            {message}
          </div>
        )}
      </div>
    </>
  );
};

PasswordStrengthCheck.propTypes = {
  value: PropTypes.string.isRequired,
  maxCharLength: PropTypes.number,
  weakColor: PropTypes.string,
  mediumColor: PropTypes.string,
  strongColor: PropTypes.string,
  weakMessage: PropTypes.string,
  mediumMessage: PropTypes.string,
  strongMessage: PropTypes.string,
};

PasswordStrengthCheck.defaultProps = {
  value: "",
  maxCharLength: 8,
  weakColor: "#fdcb35",
  mediumColor: "#7acb6b",
  strongColor: "#4d55e5",
  weakMessage: "So-so password",
  mediumMessage: "Good password",
  strongMessage: "Great password",
};
