import React from "react";
import "./style.scss";

const Input = ({ className, fullWidth, ...props }) => {
  return (
    <input
      className={`tc-input-main ${
        fullWidth ? "tc-input-full-width" : ""
      } ${className}`}
      {...props}
    />
  );
};

export default Input;
