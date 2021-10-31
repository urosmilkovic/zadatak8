import { Check } from "@mui/icons-material";
import React, { useState } from "react";
import { Container } from "react-smooth-dnd";
import { Button } from "..";
import "./style.scss";

const List = ({
  children,
  title,
  onDrop = () => {},
  getChildPayload = () => {},
  onCreateCard = () => {},
}) => {
  const [text, setText] = useState("");
  const [adding, setAdding] = useState(false);

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
          dragClass="tc-card-drag"
          dropClass="tc-card-drop"
        >
          {children}
        </Container>
      </div>
      <div className="tc-list-actions">
        {!adding ? (
          <Button onClick={() => setAdding(true)} fullWidth>
            Add item
          </Button>
        ) : (
          <div className="tc-list-form">
            <input value={text} onChange={(e) => setText(e.target.value)} />
            <Button onClick={createCard}>
              <Check />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default List;
