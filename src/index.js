import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";

function FirstName() {
  return <div>赵</div>;
}

function LastName() {
  return <div>俊潼</div>;
}

const Root = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/firstname" component={FirstName} />
      <Route exact path="/lastname" component={LastName} />
    </div>
  </Router>
);

ReactDOM.render(Root, document.getElementById("app-container"));
