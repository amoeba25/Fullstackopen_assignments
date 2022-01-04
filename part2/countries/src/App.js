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
      if(filtered.length === 1) {
        let obj = country[country.indexOf(filtered[0])]
        return(
          <> 
          <h3>{obj.name.common}</h3>
          <p>captial {obj.capital}</p>
          <p>population {obj.population}</p>

          <b>languages</b> <br/>
          {Object.values(obj.languages).map(language => 
            <li key={language}> {language} </li>)}

          <br />
          <img src={obj.flags.png} alt='flag'></img>
          </>
        )
      }
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

  const [country, setCountry] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        // console.log('promise fulfilled')
        setCountry(response.data)
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
