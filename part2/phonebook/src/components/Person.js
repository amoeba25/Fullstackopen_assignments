import React from 'react'
import Contact from './Contact'


const Person = ({persons, filterQuery}) => {
  
  if(filterQuery === '') {
    return (<ul>
      {persons.map(person => 
        <Contact name= {person.name} key={person.name} phone={person.phone} id={person.id}/> 
      )}
    </ul>)
  }
  else{
    let filtered = persons.filter(obj => obj.name.toLowerCase().includes(filterQuery.toLowerCase()))
    
    return (<ul>
      {filtered.map(person => 
        <Contact name= {person.name} key={person.id} phone={person.phone} id={person.id} />
      )}
    </ul>)
  }
 
 
}


export default Person;