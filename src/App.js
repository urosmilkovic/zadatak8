import React, { useState } from "react";
import { Board, Card, List } from "./components";
import { v4 as uuidv4 } from "uuid";
import Layout from "./layout";

const insertAt = (array, index, ...elements) => {
  const x = [...array];
  x.splice(index, 0, ...elements);
  return x;
};

const App = () => {
  const [lists, setLists] = useState([
    {
      title: "Backlog",
      cards: [
        { id: 1, text: "First" },
        { id: 2, text: "Second" },
        { id: 3, text: "Third" },
      ],
    },
    {
      title: "In Progress",
      cards: [
        { id: 4, text: "1First" },
        { id: 5, text: "1Second" },
        { id: 6, text: "1Third" },
      ],
    },
  ]);

  const onDrop = (index, { removedIndex, addedIndex, payload }) => {
    if (removedIndex !== null && addedIndex !== null) {
      setLists(
        lists.map((x, y) =>
          y === index
            ? {
                ...x,
                cards: insertAt(
                  x.cards.filter((a) => a.id !== payload.id),
                  addedIndex,
                  payload
                ),
              }
            : x
        )
      );
    } else if (removedIndex !== null && addedIndex === null) {
      setLists(
        lists.map((x, y) =>
          y === index
            ? {
                ...x,
                cards: x.cards.filter((a) => a.id !== payload.id),
              }
            : x
        )
      );
    } else if (addedIndex !== null && removedIndex === null) {
      setLists(
        lists.map((x, y) =>
          y === index
            ? {
                ...x,
                cards: insertAt(x.cards, addedIndex, payload),
              }
            : x
        )
      );
    }
  };

  const createCard = (index, text) => {
    const card = {
      text,
      id: uuidv4(),
    };
    setLists(
      lists.map((x, y) =>
        y === index ? { ...x, cards: [...x.cards, card] } : x
      )
    );
  };

  return (
    <Layout>
      <Board>
        {lists.map((x, y) => (
          <List
            key={y}
            title={x.title}
            onDrop={(data) => onDrop(y, data)}
            getChildPayload={(i) => lists[y].cards[i]}
            onCreateCard={(text) => createCard(y, text)}
          >
            {x.cards.map((a) => (
              <Card key={a.id}>{a.text}</Card>
            ))}
          </List>
        ))}
      </Board>
    </Layout>
  );
};

export default App;
