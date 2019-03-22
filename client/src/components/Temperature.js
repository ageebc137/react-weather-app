import React, { Component } from 'react';

class Temperature extends Component {
    render() {
      return (
        <div>
          <p>{this.props.description}</p>
          <h1>{this.props.temperature}&deg;{this.props.tempUnit === 'Fahrenheit' ? 'F': 'C'}</h1>
          <img src="../images/sun.png" alt="sun" />
        </div>
      );
    }
  }

  export default Temperature;