import React, { Component } from 'react';


class StateAndLifeCycle extends Component {
  
  constructor(props){
    super(props);
    console.log("props gltkn: " + props.gltkn);
    this.state = {date: new Date()};
  }
  
  componentDidMount() {
    console.log("componentDidMount");
    this.timerID = setInterval(
      ()=>this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    clearInterval(this.timerID);
  }
  
  tick(){
    this.setState({
      date: new Date()
    });
  }
  
  render() {
    return (
      <div>
      <div>
        <h1> Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        {this.props.gltkn}
      </div>
      </div>
      );
  }
}

export default StateAndLifeCycle;
