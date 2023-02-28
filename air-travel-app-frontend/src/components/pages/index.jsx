import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';


export const Home = () => {

  const [flights, setFlights] = useState([]);
  const [destination, setDestination] = useState("");
  const [airline, setAirline] = useState("");

    const getFlights = async()  => {

      const response = await axios.get('http://localhost:4000/flights');

      console.log(response.data);
      setFlights(response.data);

        // await axios.get('http://localhost:4000/flights')
        // .then((data) => {
        //   console.log(data);
        //   setFlights("Passengers for " + data.data[1].airlineName + " Flight " + data.data[1].flightNumber + 
        //   " to " + data.data[1].destination + " are kindly requested to go to Gate A1. We are now closing the gate.")
        // });
    }

    useEffect(()=> {
      getFlights();
    },[])
  
    return (
      <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height:'90vh'
      }}>
        <div className="login-box">
          <h2>Search for Flights by</h2>
          <form>
            <div className='user-box'>
              <div className="user-box">
            <input 
            type="text"
            id='airline'
            value={airline} 
            required={true}
            onChange={(e) => {
              setAirline(e.target.value);
            }}/>
            <label htmlFor='airline'>Carrier</label>
          </div>
          <div className="user-box">
            <input 
            type="text"
            id='destination'
            value={destination} 
            required={true}
            onChange={(e) => {
              setDestination(e.target.value);
            }}/>
            <label htmlFor='destination'>Destination</label>
          </div>
              {/* {flights.map(flight => flight.airlineName) + " "} */}
             
            </div>     
          </form>
        </div>
      </div>
    )
}
  