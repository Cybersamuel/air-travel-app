import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const Home = () => {

  const [flights, setFlights] = useState("");

  const getFlights = async()  => {
      await axios.get('http://localhost:4000/flights')
      .then((data) => {
        console.log(data);
        setFlights("Passengers for " + data.data[1].airlineName + " Flight " + data.data[1].flightNumber + 
        " to " + data.data[1].destination + " are kindly requested to go to Gate A1. We are now closing the gate.")

      });
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
        <h2>Search for Flights</h2>
        <form>
          <div className='user-box'>
            {flights}
          </div>     
        </form>
      </div>
    </div>
  )
}
  