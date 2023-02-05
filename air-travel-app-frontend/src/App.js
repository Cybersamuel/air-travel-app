import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios';
import React, {Component} from 'react';

class App extends Component {

  componetDidMount(){
    axios.get('/flights/')
    .then(response => {
      console.log(response.data);
    });
  }

    onSumbitFlight() {
      axios.post('/flights/add', {
        flightName: 'Caxmerian Airlines',
        flightNumber: 330,
        IATAcode: 'CX'
      })
      .then(response => {
        console.log(response);
      });
    }

    onSubmitUser() {
      axios.get('/flights/add', {
        
      })
    }
  

  
  render() {
    return(
      <div className="App">
        Hello World
        <center>
          <button className="button" onClick={() => this.onSubmitFlight()}>
            Add a flight to the system
          </button><br/>
          <button className="button" on>
            Add a user to the system.
          </button>
        </center>       
      </div>
    );
  }


}

export default App;

