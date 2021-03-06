import React, { Component } from 'react';

class FirstName extends Component<any> {
  componentDidMount() {
    React.Children.forEach(this.props.children, function(child: any) {
      console.log(child, child.type === TestChild, child.type.name);
    });
    console.log(React.isValidElement(<TestChild />));
  }

  onClick1() {
    console.log(this.props.children);
  }

  render() {
    const children = this.props.children;
    return (
      <div className="first-name" onClick={this.onClick1.bind(this)}>
        {children}
      </div>
    );
  }
}

class test extends Component<any> {
  render() {
    return (
      <div>
        <FirstName>
          {[1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3].map((v: number, index) => {
            return <p key={index}>{index}</p>;
          })}
          <TestChild />
        </FirstName>
      </div>
    );
  }
}

function TestChild() {
  return <div>fdsfddsfds</div>;
}
TestChild.displayName = 'TestChild';

export default test;
