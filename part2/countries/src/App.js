import './App.css';
import axios from 'axios'
import React, { useState, useEffect } from 'react'


const Display = ({country, filter}) => {
  if(filter === ''){
    return(
      <p>Search for a country!</p>
    )
  }
  else{
    let filtered = country.filter(obj => obj.name.common.toLowerCase().includes(filter.toLowerCase()))
    if(filtered.length>10) {
      return(
        <p>Too many matches!Specify another filter</p>
      )
    }
    else{
      return (
      <ul>
        {filtered.map(country => 
          <li key={country.name.common}>{country.name.common} </li>
        )}
      </ul>
      )
    }

  }
    
    
 
}

const App = () => {

  const [country, setNotes] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        // console.log('promise fulfilled')
        setNotes(response.data)
      })
  }, [])

  const findCountry= (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
    <p>find countries</p>
    <input type='text' onChange={findCountry} value={filter}></input>
    <Display country={country} filter={filter}/>
    </div>
    
  )
}

export default App;
