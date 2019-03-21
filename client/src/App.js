import React, { Component } from 'react';
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      city: "San Lorenzo",
      temperature: 50,
      lat: 0,
      lng: 0
    }
    this.handleInputLocation = this.handleInputLocation.bind(this);
    this.handleSubmitButton = this.handleSubmitButton.bind(this);
    
  }
  handleInputLocation = (city) => {
    this.setState({
      query: city
    });
  }
  handleSubmitButton = () => {
    const location = this.state.query;
    console.log(location);
    axios.post('http://localhost:5000/getweather', {location})
          .then((res) => {
            console.log(res);
          });
  }
  render() {
    return (
      <div className="App">
        {this.state.city && <City city={this.state.city}/>} 
        <Temperature temperature={this.state.temperature} />
        <Input handleInputLocation={this.handleInputLocation} handleSubmitButton={this.handleSubmitButton} />
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
    };

    const handleSubmitButton = (e) => {
      e.preventDefault();
      this.props.handleSubmitButton();
    }

    return (
      <div>
        <form>
          <input onChange={handleInputLocation} placeholder="Enter city"></input>
          <button onClick={handleSubmitButton} type="submit">Search</button>
        </form>
      </div>
    )
  }
};




export default App;
