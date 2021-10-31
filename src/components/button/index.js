import React from "react";
import "./style.scss";

const Button = ({ children, fullWidth, ...props }) => {
  return (
    <button
      className={`tc-button-main ${fullWidth ? "tc-button-full-width" : ""}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
