import React, { useState } from "react";
import { Container } from "react-smooth-dnd";
import "./style.scss";

const List = ({
  children,
  title,
  onDrop = () => {},
  getChildPayload = () => {},
  onCreateCard = () => {},
}) => {
  const [text, setText] = useState("");

  const createCard = () => {
    onCreateCard(text);
    setText("");
  };

  return (
    <div className="tc-list-main">
      <div className="tc-list-title">{title}</div>
      <div className="tc-list-content">
        <Container
          groupName="list"
          onDrop={onDrop}
          getChildPayload={getChildPayload}
        >
          {children}
        </Container>
      </div>
      <div className="tc-list-actions">
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={createCard}>Add card</button>
      </div>
    </div>
  );
};

export default List;
