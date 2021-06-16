import React from 'react'


const Header= (props) =>{
 return (
   <>
   <h1> {props.course} </h1>
   </>
 )
}

const Part= (props) => {

  return (
    <p>
    {props.part} {props.exercise}
  </p>
  )
  
}

const Content= (props) =>{
  
  return (
    <>
    <Part part={props.parts[0].name} exercise={props.parts[0].exercise}/>
    <Part part={props.parts[1].name} exercise={props.parts[1].exercise}/>
    <Part part={props.parts[2].name} exercise={props.parts[2].exercise}/>
  </>

  )
}

const Total= (props) =>{

  return (
  <p>
    Number of exercises are {props.total[0].exercise+ props.total[1].exercise+ props.total[2].exercise}
  </p>
  )

}




const App= () => {
  const course ={
    name: 'Half stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercise: 10
      },
      {
        name: 'Using props to pass data',
        exercise: 7
      },
      {
        name: 'State of a component',
        exercise: 14
      }
    ]
  }

  // const total =exercises1+exercises2+exercises3;
  return (
    <div>
      <Header course= {course.name}/>
      <Content parts={course.parts} />
      <Total total={course.parts} />
    </div>
  );
}

export default App;
