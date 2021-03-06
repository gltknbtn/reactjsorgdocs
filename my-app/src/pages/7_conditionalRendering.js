import React, { Component } from 'react';

function UserGreeting(props){
  return <h1> Welcome Back!</h1>;
}

function GuestGreeting(props){
  return <h1> Please sign up!</h1>;
}

function Greeting(props){
  const isLoggedIn = props.isLoggedIn;
  if(isLoggedIn){
    return <UserGreeting />;
  }else {
    return <GuestGreeting />;
  }
}


export class LoginControl1 extends Component {
  
  render(){
    return (
      <div>
        <Greeting isLoggedIn = {true}/>
      </div>
    );
  }
}


function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}


// stateful component called LoginControl2.
export class LoginControl2 extends Component{
  constructor(props){
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn : false};
  }
  
  handleLoginClick(){
    this.setState({
      isLoggedIn: true
    });
  }
  
  handleLogoutClick(){
    this.setState({
      isLoggedIn: false
    });
  }
  
  render(){
    const isLoggedIn = this.state.isLoggedIn;
    let button = null;
    if(isLoggedIn){
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    }else{
      button = <LoginButton onClick={this.handleLoginClick} />;
    }
    
    return(
      <div>
        <Greeting isLoggedIn = {isLoggedIn} />
        {button}
      </div>
    );
    
  }
}



function WarningBanner(props){
  if(!props.warn){
    return null;
  }
  
  return(
    <div className="warning">
      Warning!
    </div>
  );
  
}

export class Page extends Component{
  constructor(props){
    super(props);
    this.state = {
      showWarning: true
    }
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }
  handleToggleClick(){
    this.setState(prevState => ({
      showWarning: !prevState.showWarning
    }));
  }
  
  render(){
    return(
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }
  
}



