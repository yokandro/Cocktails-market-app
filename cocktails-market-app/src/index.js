import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { DataProvider } from "./components/DataContext";

ReactDOM.render(
  <Router>
    <DataProvider>
      <App />
    </DataProvider>
  </Router>,
  document.getElementById("root")
);
