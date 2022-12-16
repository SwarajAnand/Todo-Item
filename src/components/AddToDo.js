import { useRef } from "react";

import { v4 as uuid } from "uuid";
function AddToDo({ setToDos }) {
  //   console.log(setToDos);
  console.log(uuid());

  const inputRef = useRef();
  //   console.log(inputRef.current.value);

  function handleAddToDo(e) {
    e.preventDefault();

    // console.log(e.target.elements.addTodo.value);
    // const text = e.target.elements.addTodo.value;

    // console.log(inputRef.current.value);
    const text = inputRef.current.value;

    const todo = {
      id: uuid(),
      text,
      done: false,
    };
    console.log(todo);
    setToDos((prevTodos) => {
      return [...prevTodos, todo];
    });
    // the prevTodos fetch the previous value and after getting that the todo get added in it.
    // console.log(setToDos);

    inputRef.current.value = " ";
  }
  //   inputRef.current.value = " ";

  return (
    <form onSubmit={handleAddToDo}>
      <input
        type="text"
        name="addTodo"
        placeholder="Add new todo"
        ref={inputRef}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default AddToDo;
