// import logo from "./logo.svg";
// import "./App.css";
import { useState } from "react";
import { v4 as uuid } from "uuid";

// import Demo from "./components/Demo"; // this is a demo of the useState hooks
import AddToDo from "./components/AddToDo";
// import DeleteToDo from "./components/DeleteToDo";
import ToDoList from "./components/ToDoList";

function App() {
  const [todos, setToDos] = useState([
    { id: uuid(), text: "katta", done: false },
    { id: 2, text: "bomb", done: false },
    { id: 3, text: "pistol", done: false },
  ]);

  console.log(todos);

  // const todos = [
  //   { id: 1, text: "katta", done: false },
  //   { id: 2, text: "bomb", done: false },
  //   { id: 3, text: "pistol", done: false },
  // ];

  return (
    <div className="App">
      <h1>To-DO-App</h1>
      {/* <h1>Tere samajh ny aayega</h1> */}
      <ToDoList todos={todos} setToDos={setToDos} />
      <AddToDo setToDos={setToDos} />
      {/* <DeleteToDo /> */}
      {/* <Demo /> */}
    </div>
  );
}

export default App;
