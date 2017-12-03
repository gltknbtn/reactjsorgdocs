import React, { Component } from 'react';

export class NameForm extends Component{

  constructor(props){
    super(props);
    this.state = {
      value : ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({
      value: event.target.value.toUpperCase()
    });
  }

  handleSubmit(event){
    alert('A name was submitted: '+ this.state.value);
    event.preventDefault();
  }

  render(){
    return(
      <form onSubmit = {this.handleSubmit}>
        <label>Name
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>

    );
  }
}

export class EssayForm extends Component{
  constructor(props){
    super(props);

    this.state ={
      value: 'Please write an essay about your life :)'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    console.log(event.target.value);
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event){
    alert('Your essay was submitted: '+ this.state.value);
    event.preventDefault();
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label>Essay:
          <textarea value={this.state.value} onChange={this.handleChange}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export class FlavorForm extends Component{
  constructor(props){
    super(props);
    this.state={
      value:'grapefruid'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event){
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label>Pick your favorite La Croix flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruid">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export class Reservation extends Component{
  constructor(props){
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event){
    debugger;
    const target = event.target;
    const value = target.type ==='checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  render(){
    return(
      <form>
        <label>Is going:
        <input
          name="isGoing"
          type="checkbox"
          checked={this.state.isGoing}
          onChange={this.handleInputChange} />
        </label>
        <br/>
        <label>Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />

        </label>
      </form>
    );
  }
}
