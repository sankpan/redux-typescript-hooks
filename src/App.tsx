import React, { ChangeEvent } from "react";
import logo from "./logo.svg";
import "./App.css";
import { AppState } from "./redux/reducers/rootReducer";
import { useSelector, useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { CountActions } from "./redux/actions/countActions";
import { NameActions } from "./redux/actions/nameActions";

function App() {
  const { count } = useSelector((state: AppState) => state.count);
  const { name } = useSelector((state: AppState) => state.name);
  const dispatchCountActions = useDispatch<Dispatch<CountActions>>();
  const dispatchNameActions = useDispatch<Dispatch<NameActions>>();

  const handleCountIncrement = () => {
    dispatchCountActions({ type: "INCREMENT" });
  };

  const handleCountDecrement = () => {
    dispatchCountActions({ type: "DECREMENT" });
  };

  const handleSetName = (e: ChangeEvent<HTMLInputElement>) => {
    dispatchNameActions({ type: "SET_NAME", payload: e.target.value });
  };

  return (
    <div style={{ margin: 20 }}>
      <div style={{ marginTop: 10, marginBottom: 10 }}>
        <a href="https://levelup.gitconnected.com/redux-hooks-with-typescript-4fba08f160ad">
          Link to Article
        </a>
      </div>
      <div style={{ margin: 10 }}>
        <button onClick={handleCountDecrement} style={{ marginRight: 5 }}>
          -
        </button>
        {count}
        <button onClick={handleCountIncrement} style={{ marginLeft: 5 }}>
          +
        </button>
      </div>
      <div>
        <input type="text" onChange={handleSetName} />
        {name}
      </div>
    </div>
  );
}

export default App;
