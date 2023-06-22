import { legacy_createStore as createStore } from "redux"; //Lugar donde se centraliza todo el estado de la aplicación
import { Provider, connect } from "react-redux"; //bibliotecas para utilizar redux

import "./App.css";

// Definir el estado inicial

const initialState = {
  count: 0,
};

//Definir un reducer que actualice el estado

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: (state.count = +1) };
    case "DECREMENT":
      return { count: (state.count = -1) };
  } // la accion global que utiliza nuestro componente
};

// crear el store de Redux

const store = createStore(reducer);

const Counter = () => {
  return (
    <>
      <h3>
        Contador: <span>0</span>
      </h3>
      <button>Incrementar</button>
      <button>Decrementar</button>
    </>
  );
};

function App() {
  return (
    <>
      <div className="App">
        <h1>redux</h1>
        <Counter />
      </div>
    </>
  );
}

export default App;
