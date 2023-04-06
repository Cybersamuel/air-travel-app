import { AsyncPaginate } from 'react-select-async-paginate'
import React, { useState } from 'react';
import axios from 'axios'

export const Search = ({onSearchChange}) => {

  const [search, setSearch] = useState(null);

  const loadOptions = async (inputValue) => {
     return axios.get(`http://localhost:4000/flights`, inputValue)
     .then((response) => {
        return {
            options: response.data.map((flight) => {
                return {
                    value: `${flight.IATAcode}`,
                    label: `${flight.IATAcode} ${flight.flightNumber}`
                }
            })
        }
     })
     .catch(console.error('Error'))
  }

    // const loadOptions = async (inputValue) => {
    //     return fetch(`http://localhost:4000/flights`, inputValue)
    //     .then((response) => response.json())
    //     .then((response) => {
    //         return {
    //             options: response.data.map((flight) => {
    //                 return {
    //                     value: `${flight.IATAcode}`,
    //                     label: `${flight.IATAcode} ${flight.flightNumber}`
    //                 }
    //             })
    //         }
    //     })
    //     .catch(err => console.error(err))
    // }
  return (

    <AsyncPaginate
        placeholder="Search for flights"
        debounceTimeout={600}
        value={search}
        onChange={(searchData) => {
            setSearch(searchData);
            onSearchChange(searchData);
        }}
        loadOptions={loadOptions}
    />
  )
}

