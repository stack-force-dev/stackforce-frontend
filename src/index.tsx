import React from "react";
import ReactDOM from "react-dom";

import { init } from "@utils/ga";

import App from "./App";
import "./styles/index.scss";

init();

ReactDOM.render(<App />, document.getElementById("root"));
