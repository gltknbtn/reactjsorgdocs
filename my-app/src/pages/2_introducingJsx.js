import React, { Component } from 'react';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Gültekin',
  lastName: 'Bütün'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

class IntroducingJsx extends Component {
  
  render() {
       return (
             <div>
                 {element} 
             </div>
         );
  }
}

export default IntroducingJsx;
