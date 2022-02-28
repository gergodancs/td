import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import users from "./redux/store";
//import usersfrom "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={users}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
