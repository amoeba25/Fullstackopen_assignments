import React, { useState } from 'react'

const Button = ({name, onChange}) => {
  return (
  <button onClick={onChange}>
    {name}
  </button>
  )
}

const Title = ({title}) => {
  return (
    <h2>{title}</h2>
  )
}


const MostVotes = ({votes, anecdotes}) => {
  const largest= votes.indexOf(Math.max(...votes)); 
  return (
    <div>
      <p> {anecdotes[largest]}</p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
  
  
  const [selected, setSelected] = useState(0);
  const[votes, setVote] = useState(Array(anecdotes.length).fill(0));


  //function to choose random object from array
  const randomNumber = () => {
    const min = 0; 
    const max= anecdotes.length - 1; 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const addArray = () => {
    const copy = [...votes]; 
    
    copy[selected] += 1;
    return copy;
  }

  return (
    <div>
      <Title title='Anecdote of the day' />
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      
      <Button name='vote' onChange={()=> setVote(addArray())}/>
      <Button name='next anecdote' onChange={()=> setSelected(randomNumber())}/>

      <Title title='Anecdote with most votes' />
      <MostVotes votes= {votes} anecdotes={anecdotes}/>
    </div>
  )
}

export default App
