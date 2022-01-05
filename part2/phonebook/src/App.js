import React, { useState, useEffect} from 'react'
import Person from './components/Person'
import Input from './components/Input'
import contactService from './services/contact'


const Heading = ({heading}) => {
  return (
    <h2>{heading}</h2>
  )
}



const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [newFilter, setNewFilter] = useState('')
  
  useEffect(() => {
    contactService.getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const addNumber = (event) => {
    event.preventDefault(); 

    const nameObject = {
      name: newName, 
      phone: newPhone
    }

    //check if the name already exists
    if(persons.some(person => person.name === newName )){
      window.confirm(`${newName} is already added to the phonebook, repalce the old number with the new number?`)

      //getting the object which matches the name
      const match = persons.find(p => p.name === newName); 
      const changedPerson = {...match, phone: newPhone}

      contactService
          .update(match.id, changedPerson)
          .then(response => {
            setPersons(persons.map(person => person.id !== match.id? person: response.data))
            setNewName('')
            setNewPhone('')
          })
      
    }
    else{
      
      contactService.create(nameObject)
          .then(response => {
            setPersons(persons.concat(response.data)); 
            setNewName('');
            setNewPhone('');
          })
      
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