import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './pages/1_helloWorld.js';
import IntroducingJsx from './pages/2_introducingJsx.js';
import RenderingElements from './pages/3_renderingElements.js';
import ComponentsAndProps from './pages/4_componentsAndProps.js';
import StateAndLifeCycle from './pages/5_stateAndLifeCycle.js';
import {Toggle} from './pages/6_handlingEvents.js';
import {LoggingButton} from './pages/6_handlingEvents.js';
import {LoggingButton2} from './pages/6_handlingEvents.js';
import {LoginControl1} from './pages/7_conditionalRendering.js';
import {LoginControl2} from './pages/7_conditionalRendering.js';
import {Page} from './pages/7_conditionalRendering.js';
import {NumberList} from './pages/8_listAndKeys.js';
import {Blog} from './pages/8_listAndKeys.js';
import {NameForm} from './pages/9_forms.js';
import {EssayForm} from './pages/9_forms.js';
import {FlavorForm} from './pages/9_forms.js';
import {Reservation} from './pages/9_forms.js';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      numbers : [1, 2, 3, 4, 5, 6],
      count: 0,
      posts: [
        {id:1, title:'Hello World', content: 'Welcome to learning React'},
        {id:2, title:'Installation', content: 'You can install react from npm.'}
      ]
    };

  this.clickMe = this.clickMe.bind(this);
  }

  clickMe(){
    this.setState(prevState=>({
      count: prevState.count + 1
    }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        ====================helloworld start====================<br/><br/>
        <br/>
        <HelloWorld/>
        <br/>
        ====================helloworld end====================<br/><br/>

        ====================introducingJSX start====================<br/><br/>
        <br/>
        <IntroducingJsx/>
        <br/>
        ====================introducingJsx end====================<br/><br/>


        ====================renderingElements start====================<br/><br/>
        <br/>
        <RenderingElements/>
        <br/>
        ====================renderingElements end====================<br/><br/>

        ====================componentsAndProps start====================<br/><br/>
        <br/>
        <ComponentsAndProps/>
        <br/>
        ====================componentsAndProps end====================<br/><br/>

        ====================stateAndLifeCycle start====================<br/><br/>
        <br/>
        <StateAndLifeCycle gltkn ="yes gltkn prpos" count={this.state.count}/>
        <button onClick={this.clickMe}>clickMe </button>
        <br/>
        ====================stateAndLifeCycle end====================<br/><br/>

        ====================handlingEvents start====================<br/><br/>
        <br/>
        <Toggle/>
        <LoggingButton/>
        <LoggingButton2/>
        <br/>

        ====================handlingEvents end====================<br/><br/>

        ====================conditionalRendering1 start====================<br/><br/>
        <LoginControl1/>

        ====================conditionalRendering1 end====================<br/><br/>

        ====================conditionalRendering2 start====================<br/><br/>
        <LoginControl2/>

        ====================conditionalRendering2 end====================<br/><br/>

        ====================conditionalRendering3 start====================<br/><br/>
        <Page />
        ====================conditionalRendering3 end====================<br/><br/>

        ====================listAndKeys1 start====================<br/><br/>
        <NumberList numbers={this.state.numbers} />
        ====================listAndKeys1 end====================<br/><br/>

        ====================listAndKeys1 start====================<br/><br/>
        <Blog posts={this.state.posts} />
        ====================listAndKeys1 end====================<br/><br/>

        ====================forms_1 start====================<br/><br/>
        <NameForm />
        ====================forms_1 end====================<br/><br/>

        ====================forms_2 start====================<br/><br/>
        <EssayForm />
        ====================forms_2 end====================<br/><br/>

        ====================forms_3 start====================<br/><br/>
        <FlavorForm />
        ====================forms_3 end====================<br/><br/>
        ====================forms_4 start====================<br/><br/>
        <Reservation />
        ====================forms_4 end====================<br/><br/>

      </div>

    );
  }
}

export default App;
