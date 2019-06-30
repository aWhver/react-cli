import React from "react";
import ReactDOM from "react-dom";
/**
 * react-router-dom 已移除hashHistory
 * BrowserRouter改为HashRouter
 */
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import App from "./App";
import './index.less';

function FirstName() {
  return <div className="first-name">赵</div>;
}

function LastName() {
  return <div>俊潼</div>;
}

const Root = (
  <Router>
    <Route
      path="/"
      render={(props) => {
        return (
          <App {...props}>
            <Switch>
              {/* <Redirect to="/firstname" /> */}
              <Route path="/firstname" component={FirstName} />
              <Route path="/lastname" component={LastName} />
            </Switch>
          </App>
        );
      }}
    />
  </Router>
);

ReactDOM.render(Root, document.getElementById("app-container"));
