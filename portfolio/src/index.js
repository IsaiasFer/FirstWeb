import React from "react";
import ReactDOM from "react-dom";

/* import HomePage from "./pages/homePage"; */
import Badges from './pages/Badges'

import "./styles/GlobalStyles.css";
import "./styles/badge.css";

const appContainer = document.getElementById("app");

ReactDOM.render(<Badges />, appContainer);