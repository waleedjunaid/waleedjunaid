import React from "react";
import ReactSelect, { components } from "react-select";
import classes from "./DropDown.module.css";
import PropTypes from "prop-types";
import Colors from "../assets/Colors";
import Fonts from "../assets/Fonts";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";

export const DropDown = ({
  options,
  label,
  labelTwo,
  customStyle,
  disabled,
  value,
  setter,
  noBorder,
  placeholder,
  isMulti,
  style,
  leftIcon,
  Components,
  labelClassName,
  indicatorColor = "var(--main-color)",
  optionLabel,
  optionValue,
  ...props
}) => {
  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        {props.isFocused ? (
          <MdOutlineArrowDropUp size={30} color={indicatorColor} />
        ) : (
          <MdOutlineArrowDropDown size={30} color={indicatorColor} />
        )}
      </components.DropdownIndicator>
    );
  };

  const dropDownStyle = {
    control: (styles, { isFocused, isDisabled }) => ({
      ...styles,
      backgroundColor: isDisabled ? "#cccccc" : "var(--white-smoke-color)",
      padding: "6px 0px 6px 24px",
      borderRadius: "5px",
      border: `1px solid var(--light-gray)`,
      color: "var(--text-color-black)",
      boxShadow: "none",
      fontFamily: "plus-jakarta-display-regular",
      fontSize: "14px",
      letterSpacing: "1.4",
      cursor: "pointer",
      ...customStyle,

      ":hover": {
        ...styles[":hover"],
        borderColor: "var(--main-color)",
      },
      ":placeholder": {
        ...styles[":placeholder"],
        color: "var(--text-color-black)",
      },
      ":active": {
        ...styles[":active"],
        borderColor: "var(--main-color)",
      },
    }),

    placeholder: (defaultStyles) => {
      return {
        ...defaultStyles,
        color: "var(--text-color-black)",
      };
    },

    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: isSelected && "var(--main-color)",
        color: isSelected && "var(--white-color)",
        padding: "8px 12px",

        ":active": {
          ...styles[":active"],
        },
        ":hover": {
          ...styles[":hover"],
          color: "var(--text-color-black)",
          backgroundColor: "#ffefe4",
          cursor: "pointer",
        },
      };
    },

    multiValue: (styles, { data }) => {
      return {
        ...styles,
        backgroundColor: Colors.mainShadeOfSolitude,
        borderRadius: "8px",
        padding: "4px 8px",
        ...Fonts.p1,
      };
    },
    multiValueLabel: (styles, { data }) => ({
      ...styles,
      color: Colors.neutralShadesOfNero,
    }),
    multiValueRemove: (styles, { data }) => ({
      ...styles,
      fontSize: 12,
      color: Colors.neutralShadesOfPinkSwan,
      ":hover": {
        color: Colors.white,
      },
    }),
  };
  return (
    <div className={`${[classes.Container].join(" ")}`}>
      <style jsx>{`
        .${classes.label} {
          color: ${Colors.neutralShadesOfNero};
          font-size: ${Fonts.input2.fontSize};
          line-height: 16px;
          font-family: ${Fonts.input2.fontFamily};
        }
        .${classes.disabled} {
          color: ${Colors.neutralShadesOfDimGray};
        }
      `}</style>
      {label && (
        <label
          htmlFor={`dropdown${label}`}
          className={`mb-2 ${[
            classes.label,
            labelClassName && labelClassName,
            disabled && classes.disabled,
          ].join(" ")}`}
        >
          {label}
          {labelTwo && (
            <span style={{ color: Colors.neutralShadesOfDimGray }}>
              {" " + labelTwo}
            </span>
          )}
        </label>
      )}

      <div className={`${[classes.dropdownContainer].join(" ")}`}>
        <ReactSelect
          inputId={`dropdown${label}`}
          value={value}
          onChange={(e) => {
            setter(e);
          }}
          className={`${[classes.reactSelect].join(" ")}`}
          isMulti={isMulti}
          isDisabled={disabled}
          placeholder={placeholder}
          options={options}
          styles={{ ...dropDownStyle, ...style }}
          isClearable={false}
          components={{
            IndicatorSeparator: () => null,
            DropdownIndicator: (e) => DropdownIndicator(e),
            ...Components,
          }}
          getOptionLabel={(option) => {
            return optionLabel ? option[optionLabel] : option.label;
          }}
          getOptionValue={(option) =>
            optionValue ? option[optionValue] : option.value
          }
          {...props}
        />
        {leftIcon && <div className={classes.leftIconBox}>{leftIcon}</div>}
      </div>
    </div>
  );
};

DropDown.propTypes = {
  options: PropTypes.array.isRequired,
  label: PropTypes.string,
  labelTwo: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.object.isRequired,
  setter: PropTypes.object,
  disabled: PropTypes.bool,
  isMulti: PropTypes.bool,
  customStyle: PropTypes.object,
  style: PropTypes.object,
  Components: PropTypes.object,
  labelClassName: PropTypes.string,
};

DropDown.defaultProps = {
  placeholder: "sdsad",
  value: "aaaa",
  disabled: false,
  isMulti: false,
  options: [],
  Components: {},
};
