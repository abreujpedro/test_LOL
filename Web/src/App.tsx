import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import { useDispatch } from "react-redux";
import { decrement, increment } from "./store/exampleState/exampleSlice";

const App: React.FC = () => {
  const count = useSelector((state: RootState) => state.counterReducer);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          {count.value}
          <button onClick={() => dispatch(increment())}>Click + </button>
          <button onClick={() => dispatch(decrement())}>Click - </button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </div>
  );
};

export default App;
