import React from "react";
import classes from "./TextArea.module.css";
import PropTypes from "prop-types";
import Tooltip from "../Tooltip";

export function TextArea({
  value,
  setter,
  label,
  placeholder,
  customStyle,
  labelStyle,
  toottipIcon,
  tooltipText,
  tooltipClassName,
}) {
  return (
    <div className={classes.textAreaBox}>
      {label && <label style={{ ...labelStyle }}>{label}</label>}
      <textarea
        placeholder={placeholder}
        value={value}
        style={{ ...customStyle }}
        onChange={(e) => {
          setter(e.target.value);
        }}
      />

      {toottipIcon && tooltipText && (
        <Tooltip className={tooltipClassName} icon={toottipIcon}>
          <span>{tooltipText}</span>
        </Tooltip>
      )}
    </div>
  );
}
TextArea.propTypes = {
  value: PropTypes.string,
  setter: PropTypes.func,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  customStyle: PropTypes.object,
  labelStyle: PropTypes.object,
};
