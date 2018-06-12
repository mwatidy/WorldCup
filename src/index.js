import React from "react";
import { render } from "react-dom";
import App from "./App";

import { Provider } from "react-redux";
import { createStore } from "redux";
import game from "./Reducers";

import { CookiesProvider } from "react-cookie";

const store = createStore(game);

render(
  <Provider store={store}>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </Provider>,
  document.getElementById("root")
);
