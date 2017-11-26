import React, { Component } from 'react';


export class Toggle extends Component{
  
  constructor(props){
    super(props);
    this.state = {
      isToggleOn: true
    };
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }
  
  
  handleClick(){
    this.setState(prevState =>({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  
  render(){
    return (
      <div>
        <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      </div>
    );
  }
}

export class LoggingButton extends Component{
  // This syntax ensures `this` is bound within handleClick.
 // Warning: this is *experimental* syntax.
  handleClick = () =>{
    console.log('this is: ', this);
  }
  
  render(){
    return(
      <div>
        <button onClick = {this.handleClick} >
        Click me
        </button>
      </div>
    );
  }
}

export class LoggingButton2 extends React.Component {
  handleClick() {
    console.log('this is:', this);
  }

  render() {
    // This syntax ensures `this` is bound within handleClick
    return (
      <button onClick={(e) => this.handleClick(e)}>
        Click me2
      </button>
    );
  }
}

