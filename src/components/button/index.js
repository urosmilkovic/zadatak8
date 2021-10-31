import React from "react";
import "./style.scss";

const Button = ({ className, children, startIcon, fullWidth, ...props }) => {
  return (
    <button
      className={`tc-button-main ${
        fullWidth ? "tc-button-full-width" : ""
      } ${className}`}
      {...props}
    >
      {startIcon}
      {children}
    </button>
  );
};

export default Button;
