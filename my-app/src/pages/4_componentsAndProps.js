import React, { Component } from 'react';

function Welcome(props){
  return <h1> Hello, {props.name}</h1>;
}


class ComponentsAndProps extends Component {

  render(){
    return (
      <div>
        <Welcome name="Gültekin" />
        <Welcome name="Ali" />
        <Welcome name="Veli" />
        <Welcome name="Dale" />
      </div>
    );
  }
  
}

export default ComponentsAndProps;
