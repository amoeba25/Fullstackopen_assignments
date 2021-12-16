import React, { useState } from 'react'


const Contact = ({name}) => {
  return (
    <li>{name}</li>
  )
}


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', id: 'Arto Hellas'}
  ]) 
  const [newName, setNewName] = useState('')
  
  const addNumber = (event) => {
    event.preventDefault(); 
    const nameObject = {
      name: newName, 
    }

    setPersons(persons.concat(nameObject)); 
    setNewName('');
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNumber}>
        <div>
          name: <input 
                value= {newName}
                onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit" onClick={() => 1}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => 
          <Contact name= {person.name} key={person.name}/>
        )}
      </ul>
    </div>
  )
}

export default App