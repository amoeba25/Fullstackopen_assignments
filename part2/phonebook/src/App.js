import React, { useState } from 'react'


const Contact = ({name, phone}) => {
  return (
    <li>{name}: {phone} </li>
  )
}


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: 9821346454 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  
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

  
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNumber}>
       
        <div> name: <input 
                value= {newName}
                onChange={handleNameChange}/>
        </div> <br/>
        <div>
          phone: <input 
                value= {newPhone}
                onChange={handlePhoneChange}/>
        </div> <br />
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => 
          <Contact name= {person.name} key={person.name} phone={person.phone}/>
        )}
      </ul>
    </div>
  )
}

export default App