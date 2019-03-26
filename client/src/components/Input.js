import React, { Component } from 'react';

class Input extends Component {

    render() {
      const handleInputLocation = (e) => {
        e.preventDefault();
        this.props.handleInputLocation(e.target.value);
      };
  
      const handleSubmitButton = (e) => {
        e.preventDefault();
        this.props.handleSubmitButton();
        document.querySelector('input').value = '';
      }
  
      return (
        <div>
          <p>{this.props.message}</p>
          <form>
            <input className="input-box" onChange={handleInputLocation} placeholder="Enter city"></input>
            <button onClick={handleSubmitButton} type="submit">Search</button>
          </form>
        <footer>
            <p>Weather icons provided by <a href="https://darkskyapp.github.io/skycons/">Skycons</a></p>
        </footer>
        </div>
      )
    }
  };

  
  export default Input;