import React from 'react';
import axios from 'axios'
import { useState, useEffect } from 'react';
import { Search } from './Search';

export const Home = () =>  {

  // const handleOnSearchChange = (searchData) => {
  //   console.log(searchData);
  // }

  const [flights, setFlights] = useState([])

  const getFlights = async () => {
    const response = await axios.get('http://localhost:4000/flights')
    .then((response) => {
      console.log(response.data.map(flight => `${flight.airlineName} (${flight.IATAcode}) Flight ${flight.flightNumber} to ${flight.destination}`))
    })
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
          <form>
            <h2>Search for a flight</h2>

            {/* <div className="user-box">
            <input 
            type="text"
            id='airline'
            //value={airline} 
            required={true}
            onChange={(e) => {
              setAirline(e.target.value);
            }}/>
            <label htmlFor='airline'>Carrier</label>
          </div> */}
         
          {/* <div className="user-box">
            <input 
            type="text"
            id='destination'
            value={flights} 
            required={true}
            onChange={(e) => {
            setFlights(e.target.value);
            }}/>
            <label htmlFor='destination'>Destination</label>
          </div>    */}
          {flights}
          <Search/>
          
          
        </form>
      </div>
    </div>
  )
}
  