import { faCheck, faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Container } from "react-smooth-dnd";
import { Button, Input } from "..";
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
    if (text) {
      onCreateCard(text);
      setText("");
      setAdding(false);
    } else {
      setAdding(false);
    }
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
          <Button
            onClick={() => setAdding(true)}
            fullWidth
            startIcon={<FontAwesomeIcon icon={faPlus} />}
          >
            Add item
          </Button>
        ) : (
          <div className="tc-list-form">
            <Input
              className="tc-list-form-input"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter text here..."
            />
            <Button className="tc-list-form-button" onClick={createCard}>
              {text ? (
                <FontAwesomeIcon icon={faCheck} />
              ) : (
                <FontAwesomeIcon icon={faTimes} />
              )}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default List;
