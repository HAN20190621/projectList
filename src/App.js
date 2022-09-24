import React from "react";
import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [projects, setProjects] = useState([]);
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("red");

  useEffect(() => {
    setColor(count % 2 === 0 ? "red" : "green");
  }, [count]);

  function handleClick(event) {
    setCount(count + 1);
    setProjects((p) => {
      return [...p, { id: count, name: "count" + count }];
    });
    event.preventDefault();
  }

  return (
    <div className="App">
      <button onClick={handleClick}>Click Me</button>
      <ul>
        {projects.map((p) => {
          return (
            <li style={{ color: color }} key={p.id}>
              hello + {p.id}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
