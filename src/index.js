import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "bulma/css/bulma.min.css";

const element = document.getElementById("root");

const root = ReactDOM.createRoot(element);

root.render(<App />);
