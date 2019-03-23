import React, { Component } from 'react';

class Temperature extends Component {
    render() {
      return (
        <div>
          <p>{this.props.description}</p>
          <h1 onClick={this.props.handleChangeTempUnit}>{this.props.temperature}&deg;{this.props.tempUnit === 'Fahrenheit' ? 'F': 'C'}</h1>
          <canvas id="weather-icon" data-description={this.props.description}></canvas>
        </div>
      );
    }
  }

  export default Temperature;