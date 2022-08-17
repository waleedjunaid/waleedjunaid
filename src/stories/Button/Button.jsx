import React, { useEffect } from "react";
import PropTypes from "prop-types";
import classes from "./button.module.css";

export const Button = ({
  label,
  customStyle,
  onClick,
  disabled,
  children,
  className,
  leftIcon,
  ...props
}) => {
  let styleObject = Object.assign({}, customStyle);

  return (
    <>
      <button
        className={`${[classes.btn, className].join(" ")}`}
        style={{
          ...styleObject,
        }}
        onClick={onClick}
        disabled={disabled ? disabled : false}
        {...props}
      >
        {leftIcon && leftIcon}
        {label && label}
        {children && children}
      </button>
    </>
  );
};

Button.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  customStyle: PropTypes.object,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: undefined,
  customStyle: {},
};
