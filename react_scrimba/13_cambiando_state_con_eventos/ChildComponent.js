import React from "react";

class ChildComponent extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        Este es el contador del hijo { this.props.counter }
      </div>
    )
  }
}