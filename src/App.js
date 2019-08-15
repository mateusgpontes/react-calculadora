import React from "react";
import Calcula from "./components/Calcula/";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Calcula />
    </Provider>
  );
}

export default App;
