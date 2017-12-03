import React, { Component } from 'react';


export class LoadingButton extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: false
    };

  }

  handleClick(e){
    this.setState({
      isLoading:true
    });

    setTimeout(()=>{
      this.setState({
        isLoading:false
      });
    }, 2000);
  }

  render(){
    let isLoading = this.state.isLoading;
     return (
       <div>
         <button
         bsStyle="primary"
         disabled={isLoading}
         onClick={!isLoading ? this.handleClick.bind(this) : null}>
         {isLoading ? 'Loading...' : 'Loading state'}
         </button>
       </div>
     );
  }
}
