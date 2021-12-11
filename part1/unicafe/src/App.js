import './App.css';
import React, { useState } from 'react'

const Title = ({text}) => {
  return (
    <h2>{text}</h2>
  )
}

const Stastistics = ({good, neutral, bad}) => {
  const all = good + bad + neutral; 
  const average = good * 1 - bad * 1;
  if(good === 0 && bad===0 && neutral===0) {
    return (
      <>
      <Title text='statistics'/>
      <p>No feedback given</p>
      </>
    )
  }
  return (
    <>
    <Title text='statistics'/>
    <table> 
    <StatisticLine label= 'good'review ={good} />
    <StatisticLine label= 'neutral'review ={neutral} />
    <StatisticLine label= 'bad'review ={bad} />
    <StatisticLine label= 'all'review ={all} />
    <StatisticLine label= 'average'review ={(average/all).toFixed(2)} />
    <StatisticLine label= 'postive'review ={`${(good*100/all).toFixed(2)} %`} />
    </table>
    </>
  )
  
}

const Button = ({feedback, reviewChange}) => {
  return (
    <button onClick= {reviewChange}> {feedback} </button>
  )
}

const StatisticLine = ({label, review}) => {
  return (
    <tr> 
    <td> {label} </td> 
    <td> {review} </td>
    </tr>
  )
}

function App() {
   // save clicks of each button to its own state
   const [good, setGood] = useState(0)
   const [neutral, setNeutral] = useState(0)
   const [bad, setBad] = useState(0)

   
  return (
    <div>
      <Title text='give feedback'/>
      <Button feedback='good' reviewChange= {()=> setGood(good + 1)}/>
      <Button feedback='neutral'  reviewChange= {()=> setNeutral(neutral + 1)}/>
      <Button feedback='bad'  reviewChange= {()=> setBad(bad + 1)}/>
      <Stastistics good={good} bad={bad} neutral={neutral} />

    </div>
  );
}

export default App;
