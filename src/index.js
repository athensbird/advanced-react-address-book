import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";
import users from "./users";

// var currentUser;
//
// function selectUser() {
// }

function render() {
  ReactDOM.render(
    <App users={users} />,
    document.getElementById("root")
  );
}
render();
