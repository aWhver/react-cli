import React, { Component } from "react";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    const children = this.props.children;
    console.log(this.props.location);
    return (
      <div>
        <div>
          <Link to="/firstname">zhao</Link>
        </div>
        <div>
          <Link to="/lastname">juntong</Link>
        </div>
        {children && React.cloneElement(
          children,
          Object.assign(
            {
              key: this.props.location.pathname
            },
            this.props
          )
        )}
      </div>
    );
  }
}

export default App;
