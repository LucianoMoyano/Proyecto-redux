import { createStore } from "redux";
import { Provider, connect } from "react-redux";
import "./App.css";

// Define the initial state
const initialState = {
  count: 0,
};

// Define a reducer that updates the state
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      if (state.count > 0) {
        return { count: state.count - 1 };
      }
    default:
      return state;
  }
};

// Create the Redux store
const store = createStore(reducer);

const Counter = ({ count, increment, decrement }) => {
  return (
    <>
      <h3>
        Contador: <span>{count}</span>
      </h3>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
    </>
  );
};

// Map the state and actions to the component
const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: "INCREMENT" }),
    decrement: () => dispatch({ type: "DECREMENT" }),
  };
};

// Connect the component to the Redux store
const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);

// Main component
function App() {
  return (
    <>
      <Provider store={store}>
        <ConnectedCounter />
      </Provider>
    </>
  );
}

export default App;
