import React, {useState} from 'react'


const Title =({title}) => <h2>{title}</h2>

const Button= ({handleClick,text}) => <button onClick={handleClick}> {text} </button>

const Statistic= ({text, value}) => {
return (
  <tr>
    <td> {text} </td>
    <td> {value} </td>
  </tr>
)
}



const Statistics= (props) => {

  if(props.good===0 && props.bad===0 && props.neutral===0){
    return (
      <p> No feedback given </p>
    )
  }
  return(
    <table>
    <Statistic text='good' value={props.good} />
    <Statistic text='neutral' value={props.neutral} />
    <Statistic text='bad' value={props.bad} />
    <Statistic text='total' value={props.total} />
    <Statistic text='average' value={props.average.toFixed(1)} />
    <Statistic text='postive' value={props.postive.toFixed(1)+ '%'} />
    </table>
  )
}
//Parent component
const App= () => {
 
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total=good+neutral+bad;
  const average= (good-bad)/ total;
  const postive= good/(total)*100;    

  const goodClick = () => setGood(good +1);
  const neutralClick = () => setNeutral(neutral +1);
  const badClick = () => setBad(bad +1);


  return (
    <div>
      <Title title='give feedback' />
      <Button text='good' handleClick={goodClick}/>
      <Button text='neutral' handleClick={neutralClick}/>
      <Button text='bad' handleClick={badClick} />

      <Title title='statistics' />
      <Statistics good={good} neutral= {neutral} bad= {bad} total={total} average={average} postive={postive}/>
    </div>
  );
}

export default App;
