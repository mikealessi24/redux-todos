import React from "react";
import VisibleTodoList from "./containers/VisibleTodoList";
import AddTodo from "./containers/AddTodo";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  );
}

export default App;
