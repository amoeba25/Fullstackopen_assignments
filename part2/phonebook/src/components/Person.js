import React from 'react'
import Contact from './Contact'


const Person = ({persons, filterQuery}) => {
  
  if(filterQuery === '') {
    return (<ul>
      {persons.map(person => 
        <Contact name= {person.name} key={person.name} phone={person.phone}/>
      )}
    </ul>)
  }
  else{
    let filtered = persons.filter(obj => obj.name.toLowerCase().includes(filterQuery.toLowerCase()))
    
    return (<ul>
      {filtered.map(person => 
        <Contact name= {person.name} key={person.name} phone={person.phone}/>
      )}
    </ul>)
  }
 
 
}


export default Person;