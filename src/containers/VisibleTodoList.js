import React, { Component } from "react";
import { connect } from "react-redux";

const { visibilityFilters, toggleTodo } = require("../actions");

export const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case visibilityFilters.SHOW_ALL:
      return todos;
    case visibilityFilters.SHOW_COMPLETED:
      return todos.filter((todo) => todo.completed);
    case visibilityFilters.SHOW_ACTIVE:
      return todos.filter((todos) => !todo.completed);
    default:
      return todos;
  }
};

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
});

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTodo: (id) => dispatch(toggleTodo(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VisibleTodoList);
