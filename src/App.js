import React from "react";
import Calculate from "./components/Calculate/";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Calculate />
    </Provider>
  );
}

export default App;
