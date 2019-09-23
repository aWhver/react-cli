import * as React from 'react';
import * as ReactDOM from 'react-dom';
/**
 * react-router-dom 已移除hashHistory
 * BrowserRouter改为HashRouter
 */
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
// import './index.less';
import App from './page/App/App';

// class Root extends React.Component {
//   render() {
//     return <div>name</div>;
//   }
// }

const FirstName = () => {
  return <div>赵</div>;
};
const LastName = () => {
  return <div>俊潼</div>;
};

const Root = () => (
  <Router>
    <Route
      path="/"
      render={props => {
        return (
          <App {...props}>
            <Switch>
              <Route path="/firstname" component={FirstName} /> */}
              <Route path="/lastname" component={LastName} />
              <Redirect to="/firstname" />
            </Switch>
          </App>
        );
      }}
    />
  </Router>
);

// const Root = () => {
//   return <div>hello world</div>;
// };

ReactDOM.render(<Root />, document.getElementById('app-container'));

// export default Root;
