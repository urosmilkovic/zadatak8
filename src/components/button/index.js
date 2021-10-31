import React from "react";
import "./style.scss";

const Button = ({
  className,
  children,
  startIcon,
  fullWidth,
  color = "primary",
  ...props
}) => {
  return (
    <button
      className={`tc-button-main tc-button-main-${color} ${
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
