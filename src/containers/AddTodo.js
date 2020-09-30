import React, { Component } from "react";
import { connect } from "react-redux";

export const AddTodo = ({ dispatch }) => {
  const [form, setForm] = React.useState("");
  function addTodoClearForm() {
    const tempVal = form;
    setForm("");
    dispatch(addtodo(tempVal));
  }
  return (
    <div>
      <input value={form} onChange={(event) => setForm(event.target.value)} />
      <button onClick={addTodoClearForm}>Add a todo</button>
    </div>
  );
};

export default connect()(AddTodo);
