import React, { useState } from "react";
import classes from "./MessageInputWithButton.module.css";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import InputClasses from "../Input/input.module.css";
import { IoIosSend } from "react-icons/io";
import PropTypes from "prop-types";

export const MessageInputWithButton = ({
  state,
  setter,
  onClick,
  disabled = false,
}) => {
  return (
    <div className={[classes.relative].join(" ")}>
      <style jsx>{`
        .${InputClasses.inputPassContainer} input::placeholder {
          color: var(--text-color-black) !important;
        }
      `}</style>
      <Input
        placeholder="Message..."
        value={state}
        setter={setter}
        type="text"
        customStyle={{
          borderRadius: "46px",
          background: "#f1f1f1",
          height: "64px",
        }}
        inputStyle={{
          border: "none",
          fontSize: "18px",
          padding: "15px 15px 15px 24px",
          fontFamily: "plus-jakarta-display-regular",
        }}
      />
      <div className={[classes.sendBtnDiv].join(" ")}>
        <Button
          label={disabled ? "Sending..." : "Send"}
          customStyle={{
            backgroundColor: "#F56A0D",
            color: "var(--white-color)",
            width: "136px",
            height: "48px",
            padding: "0px",
            fontFamily: "plus-jakarta-display-regular",
            fontSize: "18px",
          }}
          onClick={onClick}
          rightIcon={<IoIosSend size="20px" color="var(--white-color)" />}
          disabled={disabled}
        />
      </div>
    </div>
  );
};
MessageInputWithButton.propTypes = {
  onClick: PropTypes.func,
};
MessageInputWithButton.defaultProps = {
  onClick: () => console.log(),
};
