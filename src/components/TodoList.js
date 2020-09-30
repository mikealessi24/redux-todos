import React from "react";

export default function TodoList(todos, toggleTodo) {
  return (
    <ul>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          {...todo}
          boundToggleTodo={() => toggleTodo(todo.id)}
        />
      ))}
    </ul>
  );
}
