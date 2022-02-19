import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { MyProvider } from "./Context";

ReactDOM.render(
  <MyProvider>
    <App />
  </MyProvider>,
  document.getElementById("root")
);
