import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./App";
import { store } from "./redux/configureStore";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
