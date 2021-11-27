import React, { useEffect, useState } from "react";
import { Board, Card, List, Create } from "./components";
import { v4 as uuidv4 } from "uuid";
import Layout from "./layout";

const tryParse = (x) => {
  try {
    return JSON.parse(x);
  } catch {
    return x;
  }
};

const insertAt = (array, index, ...elements) => {
  const x = [...array];
  x.splice(index, 0, ...elements);
  return x;
};

const App = () => {
  const [lists, setLists] = useState(
    tryParse(localStorage.getItem("lists")) || [
      {
        title: "Backlog",
        cards: [
          { id: 1, text: "Release the course" },
          { id: 2, text: "Sit back and relax" },
        ],
      },
      {
        title: "In Progress",
        cards: [
          { id: 3, text: "Work on projects" },
          { id: 4, text: "Listen to music" },
        ],
      },
      {
        title: "Complete",
        cards: [
          { id: 5, text: "Being cool" },
          { id: 6, text: "Getting stuff done" },
        ],
      },
      {
        title: "On hold",
        cards: [{ id: 7, text: "Being uncool" }],
      },
    ]
  );

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(lists));
  }, [lists]);

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

  const onCreateList = (title) => {
    setLists([...lists, { title, cards: [] }]);
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
        <Create onCreateList={onCreateList} />
      </Board>
    </Layout>
  );
};

export default App;
