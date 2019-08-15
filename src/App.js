import React from "react";
import Calcula from "./components/Calcula";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Calcula />
      </Provider>
    </div>
  );
}

export default App;
