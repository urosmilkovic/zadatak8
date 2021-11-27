import React from "react";
import { Draggable } from "react-smooth-dnd";
import "./style.scss";

const Card = ({ children }) => {
  return (
    <Draggable>
      <div className="tc-card-main">{children}</div>
    </Draggable>
  );
};

export default Card;
