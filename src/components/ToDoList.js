import DeleteToDo from "./DeleteToDo";

function ToDoList({ todos, setToDos }) {
  // console.log(todos); //(3) [{...} , {...} , {...}]

  // const styleProp = {
  // color: "red",
  // font-size: 30px,
  // };
  function handleToggleToDos(toDo) {
    // console.log(toDo);
    // let todoData = toDo;
    // console.log(todoData);

    const updatedToDos = todos.map((currentTodo) =>
      currentTodo.id === toDo.id
        ? { ...currentTodo, done: !currentTodo.done }
        : currentTodo
    );
    console.log(updatedToDos);
    setToDos(updatedToDos);
  }

  if (!todos.length) {
    return <p>No ToDos...</p>;
  }

  // function ToDoList(props) {
  // console.log(props);  //{todos: Array(3)}
  return (
    <ul>
      {todos.map((todo, index) => (
        <li
          key={todo.id}
          onDoubleClick={() => handleToggleToDos(todo)}
          style={{
            textDecoration: todo.done ? "line-through" : "",
          }}
        >
          {todo.text}
          <DeleteToDo todo={todo} setToDos={setToDos} />
        </li>
      ))}
    </ul>
  );
}

export default ToDoList;
