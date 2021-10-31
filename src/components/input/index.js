import React from "react";
import "./style.scss";

const Input = ({ className, ...props }) => {
  return <input className={`tc-input-main ${className}`} {...props} />;
};

export default Input;
