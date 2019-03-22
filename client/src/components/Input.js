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
      }
  
      return (
        <div>
          <p>{this.props.message}</p>
          <form>
            <input onChange={handleInputLocation} placeholder="Enter city"></input>
            <button onClick={handleSubmitButton} type="submit">Search</button>
          </form>
          <button onClick={this.props.handleChangeTempUnit}>Change Unit</button>
          <footer>Icons made by    <a 
                                    href="https://www.flaticon.com/authors/rami-mcmin" 
                                    title="Rami McMin"
                                >Rami McMin</a> from
                                <a 
                                    href="https://www.flaticon.com/" 			    
                                    title="Flaticon">www.flaticon.com
                                </a> 
                is licensed by  <a 
                                    href="http://creativecommons.org/licenses/by/3.0/" 			    
                                    title="Creative Commons BY 3.0" target="_blank"
                                >CC 3.0 BY</a>
            </footer>
        </div>
      )
    }
  };

  
  export default Input;