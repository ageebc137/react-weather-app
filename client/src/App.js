import React, { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "San Lorenzo",
      temperature: 50,
      lat: 0,
      lng: 0
    }
    this.handleInputLocation = this.handleInputLocation.bind(this);
    
  }
  handleInputLocation = (city) => {
    this.setState({
      city
    });
  }
  render() {
    return (
      <div className="App">
        {this.state.city && <City city={this.state.city}/>} 
        <Temperature temperature={this.state.temperature} />
        <Input handleInputLocation={this.handleInputLocation}/>
      </div>
    );
  }
}

class City extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.city}</h3>
      </div>
    );
  }
}

class Temperature extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.temperature}</h1>
      </div>
    );
  }
}

class Input extends Component {

  render() {
    const handleInputLocation = (e) => {
      e.preventDefault();
      this.props.handleInputLocation(e.target.value);
    }

    return (
      <div>
        <form>
          <input onChange={handleInputLocation} placeholder="Enter city"></input>
          <button type="submit">Search</button>
        </form>
      </div>
    )
  }
}




export default App;
