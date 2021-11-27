import React, { useState } from "react";
import { Button, Input } from "..";
import "./style.scss";

const Create = ({ onCreateList }) => {
  const [title, setTitle] = useState("");

  const onCreate = () => {
    if (title) {
      onCreateList(title);
      setTitle("");
    }
  };

  return (
    <div className="tc-create-main">
      <Input
        className="tc-create-input"
        fullWidth
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="List name"
      />
      <Button fullWidth color="secondary" onClick={onCreate}>
        Create new list
      </Button>
    </div>
  );
};

export default Create;
