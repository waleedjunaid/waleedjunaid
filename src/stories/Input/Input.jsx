import React, { useState } from "react";
import PropTypes from "prop-types";
import classes from "./input.module.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Tooltip from "../Tooltip";

/**
 * Primary UI component for user interaction
 */
export const Input = ({
  type,
  label,
  label2, // sub label
  value, // input value
  setter, //setValue
  noBorder,
  placeholder,
  disabled,
  customStyle, //Input Container inline Style
  inputStyle, //Input inline Style
  labelStyle, //Label inline Style
  error, // Show Error Boolean
  errorText, // Error Text
  leftIcon, // Icon For Input
  toottipIcon, // Tool Tip Icon
  tooltipText, // Tool Tip Text
  tooltipClassName, // Tool Tip class
  ...props
}) => {
  const [passToggle, setPassToggle] = useState(false);
  let inputContainerStyleObject = Object.assign(
    {},
    error && { border: `1px solid red ` },
    leftIcon && { paddingLeft: "50px" }
  );
  return (
    <>
      <div className={`${[classes.Container].join(" ")}`}>
        {label && (
          <label
            htmlFor={`input${label}`}
            className={`mb-2  ${[
              classes.labelText,
              disabled && classes.disabled,
            ].join(" ")}`}
            style={{ ...labelStyle }}
          >
            {label} {label2 && label2}
          </label>
        )}
        <div
          className={`${[classes.inputPassContainer].join(" ")}`}
          style={{ ...customStyle }}
        >
          {leftIcon && <div className={classes.leftIconBox}>{leftIcon}</div>}
          <input
            value={value}
            onChange={(e) => {
              setter(e.target.value);
            }}
            disabled={disabled}
            placeholder={placeholder}
            type={passToggle == true ? "text" : type}
            id={`input${label}`}
            className={` ${[
              classes.inputBox,
              noBorder && classes.noBorder,
            ].join(" ")}`}
            style={{ ...inputContainerStyleObject, ...inputStyle }}
            {...props}
          />
          {type == "password" && passToggle == false && (
            <VisibilityOffIcon
              className={classes.passwordIcon}
              onClick={(e) => setPassToggle(!passToggle)}
            />
          )}
          {type == "password" && passToggle && (
            <VisibilityIcon
              className={classes.passwordIcon}
              onClick={(e) => setPassToggle(!passToggle)}
            />
          )}
        </div>
        {toottipIcon && tooltipText && (
          <Tooltip className={tooltipClassName} icon={toottipIcon}>
            <span>{tooltipText}</span>
          </Tooltip>
        )}
        {error && (
          <p className={`mt-2 ${[classes.errorText].join(" ")}`}>{errorText}</p>
        )}
      </div>
    </>
  );
};

Input.propTypes = {
  type: PropTypes.oneOf.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  setter: PropTypes.string,
  noBorder: PropTypes.bool,
  disabled: PropTypes.bool,
  customStyle: PropTypes.string,
  error: PropTypes.bool,
  errorText: PropTypes.string,
  label2: PropTypes.string,
};

Input.defaultProps = {
  type: "text",
  placeholder: "enter text",
  value: "",
  noBorder: false,
  disabled: false,
  error: false,
  errorText: "An error has occurred, check your details!",
};
