import axios from 'axios';
import React from 'react'
import DeleteBtn from './DeleteBtn'


//deleting a note
const deleteNote = (id, name) => {
  const url= `http://localhost:3001/persons/${id}`;

  window.confirm(`Delete ${name}?`)
  axios.delete(url);
}

const Contact = ({id, name, phone}) => {
    return (
      <li>{name}: {phone} <DeleteBtn onDelete={() => deleteNote(id, name)}/> </li>
    )
  }

export default Contact;