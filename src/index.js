import React from "react";
import { render } from "react-dom";
import App from "./App";

import { Provider } from "react-redux";
import { createStore } from "redux";
import game from "./Reducers";

const store = createStore(game);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
