import React, { useState } from 'react'


const Contact = ({name, phone}) => {
  return (
    <li>{name}: {phone} </li>
  )
}

const Heading = ({heading}) => {
  return (
    <h2>{heading}</h2>
  )
}

const Input = ({label, value, onChange}) => {
  return (
    <div> {label}: <input 
                value= {value}
                onChange={onChange}/>
    </div> 
  )
}

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


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456' },
    { name: 'Ada Lovelace', phone: '39-44-5323523' },
    { name: 'Dan Abramov', phone: '12-43-234345' },
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [newFilter, setNewFilter] = useState('')
  
  const addNumber = (event) => {
    event.preventDefault(); 

    //check if the name already exists
    if(persons.some(person => person.name === newName )){
      alert(`${newName} is already added to the phonebook`)
    }
    else{
      const nameObject = {
        name: newName, 
        phone: newPhone
      }
  
      setPersons(persons.concat(nameObject)); 
      setNewName('');
      setNewPhone('');
    }
    
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value); 
  }

  
  return (
    <div>
      <Heading heading= 'Phonebook'/>
      <Input label ='filter' value={newFilter} onChange={handleFilterChange} /> <br />

      <Heading heading= 'Add a new'/>
      <form onSubmit={addNumber}>
       
      <Input label ='Name' value={newName} onChange={handleNameChange} /> <br />
      <Input label='Phone' value={newPhone} onChange={handlePhoneChange} /> <br />
        
      <div>
        <button type="submit" >add</button>
      </div>
      </form>
      <Heading heading= 'Numbers'/>
      <Person persons ={persons} filterQuery={newFilter} />
    </div>
  )
}

export default App