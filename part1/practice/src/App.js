import React, { useState } from 'react'


/* const Hello =({name, age}) =>{

  // const {name, age}= props;
  const bornYear= () => new Date().getFullYear() - age; 
  return (
    <>
      <p>Hello {name}! You are {age} years old</p>
      <p> You were born in {bornYear()} </p> 
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

const App = () => {
  const [counter, setCounter] = useState(0)

  const increaseByOne= () => setCounter(counter+1)
  const decreaseByOne= () => setCounter(counter-1)
  const setToZero= () => setCounter(0)
  return (
    <div> 
      <Display counter={counter} />
      <Button handleClick={increaseByOne} text='plus'/>
      <Button handleClick={decreaseByOne} text='minus'/>
      <Button handleClick={setToZero} text='reset'/>
  
    </div>
   
  )
}

//child to parent 'App' 
const Display= ({counter}) =><div> {counter} </div>

//child to parent 'App' 
const Button= ({text, handleClick}) => <button onClick={handleClick}> {text} </button>


//Dont do this bad practice!!
const App= () =>{

  const [clicks , setClicks]= useState({
    left:0,
    right:0
  })

  const handleLeftClick= () =>{
    setClicks({...clicks, left:clicks.left+1})
  }
  const handleRightClick= ()=>{
    setClicks({...clicks, right:clicks.right+1})
  }

  return (
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}>
        left
      </button>
      <button onClick={handleRightClick}>
        right
      </button>
      {clicks.right}
    </div>
  )
}

*/

const History = (props) =>{
  if(props.allClicks.length === 0){
    return (
      <div>
        the app is used by pressing buttons :O
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({handleClick, text}) =>{
  return (
    <button onClick= {handleClick} >
    {text}
  </button>
  )

}


const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  return (
    <div>
      {left}
      <Button handleClick={handleLeftClick} text='left' />
      <Button handleClick={handleRightClick} text='right' />
      {right}
      <History allClicks= {allClicks} />
    </div>
  )
}




export default App;
