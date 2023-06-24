import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Seconds } from "./components/Seconds/Seconds";
import { TodoList } from "./components/TodoList/TodoList";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Seconds />
    <TodoList />
  </React.StrictMode>
);

//proyecto grande redux
//proyecto corto context
