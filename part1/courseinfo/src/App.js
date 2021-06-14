import React from 'react'

const Hello =(props) =>{
  return (
    <>
      <p>Hello {props.name}! You are {props.age} years old</p>
    </>
  )
}


const App= () => {
  const name='Soham';
  const age=20;
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name={name} age={age}/>
    </div>
  );
}

export default App;
