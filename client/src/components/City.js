import React, { Component } from 'react';

class City extends Component {
    render() {
      return (
        <div>
          <h3>{this.props.city}</h3>
        </div>
      );
    }
  }

  export default City;