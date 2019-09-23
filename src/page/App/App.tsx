import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component<any> {
  render() {
    const children = this.props.children || 32432;
    console.log(this.props.location);
    return (
      <div>
        <div>
          <Link to="/firstname">zhao</Link>
        </div>
        <div>
          <Link to="/lastname">juntong</Link>
        </div>
        {children &&
          React.cloneElement(
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
