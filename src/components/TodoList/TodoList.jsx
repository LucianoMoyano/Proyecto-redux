import React, { useState } from "react";

export const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    //Ahora hacemos el formato de nuestra tarea

    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false,
    };

    //concatenamos en el estado setTodos, todos los todos con la funcion spread operator
    setTodos([...todos, newTodo]);
    setTodo("");
  };

  const deleteTodo = (id) => {
    const upDatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(upDatedTodos);
  };

  return (
    <>
      <div className="div-container">
        <h2>Nuestras tareas</h2>
        <h3>Ingrese tareas aqui</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Ingrese tarea aqui"
            value={todo}
            onChange={(e) => {
              setTodo(e.target.value);
            }}
          />
          <button type="submit">+</button>
        </form>
        {todos.map((todo) => (
          <div key={todo.id}>
            {todo.text}
            {""}
            <button onClick={() => deleteTodo(todo.id)}>x</button>
          </div>
        ))}
      </div>
    </>
  );
};
