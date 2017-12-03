import React, { Component } from 'react';

function BoilingVerdict(props){
  if(props.celcius >= 100){
    return <p>The water would boil</p>
  }else{
    return <p>The water would not boild</p>
  }
}

export class Calculator extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      temperature: ''
    };
  }

  handleChange(e){
    this.setState({
      temperature: e.target.value
    });
  }

  render(){
    const temperature = this.state.temperature;
    return(
      <fieldset>
        <legend>Enter temperature in Celcius: </legend>
        <input value={temperature} onChange={this.handleChange} />

        <BoilingVerdict celcius={parseFloat(temperature)} />
      </fieldset>
    );
  }
}

//////////////////////////////////////////////////////////////

const scaleNames = {
  c: 'Celcius',
  f: 'Fahrenheit'
}

function toCelcius(fahrenheit){
  return (fahrenheit - 32)*5/9
}

function toFahrenheit(celcius){
  return (celcius*9/5)+32;
}

function tryConvert(temperature, convertFunc){
  const input = parseFloat(temperature);
  if(Number.isNaN(input)){
    return '';
  }

  const output = convertFunc(input);
  const rounded = Math.round(output*1000)/1000;

  return rounded.toString();
}

class TemperatureInput extends Component{
  constructor(props){
    super(props);
  }

  handleChange(e){
    //this.setState({temperature: e.target.value});
    this.props.onTemperatureChange(e.target.value);
  }

  render(){
    //Before: const temperature = this.state.temperature;
    const temperature = this.props.temperature;
    const scale = this.props.scale;

    return(
      <fieldset>
        <legend> Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature} onChange = {this.handleChange.bind(this)} />
      </fieldset>
    );
  }
}

export class Calculator2 extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      temperature: '',
      scale: 'c'
    };
  }

  handleCelciusChange(temperature){
    this.setState({scale:'c',temperature});
  }
  handleFahrenheitChange(temperature){
    this.setState({scale:'f',temperature});
  }

  render(){
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celcius = scale === 'f' ? tryConvert(temperature, toCelcius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
    return(
      <div>
        <TemperatureInput scale = "c" temperature={celcius} onTemperatureChange = {this.handleCelciusChange.bind(this)}/>
        <TemperatureInput scale = "f" temperature={fahrenheit} onTemperatureChange = {this.handleFahrenheitChange.bind(this)} />
      </div>
    );
  }
}
