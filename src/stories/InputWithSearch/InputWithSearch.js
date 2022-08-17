import React from "react";
import classes from "./InputWithSearch.module.css";
import PropTypes from "prop-types";
import { AiOutlineSearch } from "react-icons/ai";

export function InputWithSearch({
  value,
  setValue,
  onSearch,
  placeholder,
  type,
}) {
  return (
    <div className={classes.inputContainer}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={(e) => {
          value == "" && onSearch(value);
        }}
      />
      <button onClick={() => onSearch(value)}>
        <AiOutlineSearch className={classes.icon} />
      </button>
    </div>
  );
}
InputWithSearch.propType = {
  value: PropTypes.string,
  setValue: PropTypes.func,
  onSearch: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};
InputWithSearch.defaultProps = {
  // value: 'abxda',
  placeholder: "Search here...",
  type: "text",
};
