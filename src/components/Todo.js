import React from "react";

export default function Todo({ boundToggleTodo, text, id, completed }) {
  return (
    <li
      onClick={boundToggleTodo}
      style={{ textDecoration: completed ? "line-through" : "none" }}
    >
      {text}
    </li>
  );
}
