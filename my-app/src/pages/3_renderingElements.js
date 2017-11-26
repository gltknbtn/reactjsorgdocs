import React, { Component } from 'react';


class RenderingElements extends Component {
  
  render() {
    return (
         <h2>It is {new Date().toLocaleTimeString()}.</h2>
      );
  }
}

export default RenderingElements;
