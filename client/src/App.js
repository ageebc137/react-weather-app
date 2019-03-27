import React, { Component } from 'react';
import axios from 'axios';
import City from './components/City';
import Temperature from './components/Temperature';
import Input from './components/Input';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      city: "",
      description: '',
      temperature: null,
      kTemperature: null,
      lat: 0,
      lng: 0,
      message: "",
      tempUnit: 'Fahrenheit'
    }

    this.handleInputLocation = this.handleInputLocation.bind(this);
    this.handleSubmitButton = this.handleSubmitButton.bind(this);
    this.handleChangeTempUnit = this.handleChangeTempUnit.bind(this);
    this.getCurrentLocationWeather = this.getCurrentLocationWeather.bind(this);

  }
  componentDidMount = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
  
        this.getCurrentLocationWeather(pos.coords);
      }, (err) => {
        console.warn(err);
      });
    };
   
  }

  getCurrentLocationWeather = (coords) => {
   
    axios.post('/api/getGeoLocation', {lat: coords.latitude, lng: coords.longitude})
    .then((res) => {
      let temperature;
      if (this.state.tempUnit === 'Fahrenheit') {
         temperature = this.toFahrenheit(res.data.weatherData.main.temp);
      }else if (this.state.tempUnit === 'Celsius') {
        temperature = this.toCelsius(res.data.weatherData.main.temp);
      }
      
      const description = res.data.weatherData.weather[0].description;
      this.setState({
        message: '',
        city: res.data.city,
        temperature,
        kTemperature: res.data.weatherData.main.temp,
        description
      });
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
      this.setState({
        message: 'Could not find city. Please enter another location'
      })
    });
  }
  handleInputLocation = (location) => {
    this.setState({
      query: location
    });
  }
  toFahrenheit = (temp) => {
    return parseInt((temp - 273.15)*1.8 + 32);
  }

  handleChangeTempUnit() {
    if (this.state.tempUnit === 'Fahrenheit') {
      this.setState({
        temperature: `${this.toCelsius(this.state.kTemperature)}` ,
        tempUnit: 'Celsius'
      });
    } else if (this.state.tempUnit === 'Celsius') {
      this.setState({
        temperature: `${this.toFahrenheit(this.state.kTemperature)}`,
        tempUnit: 'Fahrenheit'
      });
    };
  }

  toCelsius = (temp) => {
     return parseInt(temp - 273.15);
  }

  handleSubmitButton = () => {
    const location = this.state.query;

    axios.post('/api/getweather', {location})
          .then((res) => {
            let temperature;
            if (this.state.tempUnit === 'Fahrenheit') {
               temperature = this.toFahrenheit(res.data.weatherData.main.temp);
            }else if (this.state.tempUnit === 'Celsius') {
              temperature = this.toCelsius(res.data.weatherData.main.temp);
            }
            
            const description = res.data.weatherData.weather[0].description;
            this.setState({
              message: '',
              city: res.data.city,
              temperature,
              kTemperature: res.data.weatherData.main.temp,
              description
            });
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err);
            this.setState({
              message: 'Could not find city. Please enter another location'
            })
          });
  }
  render() {
    return (
      <div className="App">
        {this.state.city && <City city={this.state.city}/>} 
        <Temperature 
          description={this.state.description} 
          temperature={this.state.temperature} 
          tempUnit={this.state.tempUnit}
          handleChangeTempUnit={this.handleChangeTempUnit} 
        />
        <Input 
          message={this.state.message} 
          handleInputLocation={this.handleInputLocation}
          handleSubmitButton={this.handleSubmitButton}
        />
      </div>
    );
  }
}


export default App;
