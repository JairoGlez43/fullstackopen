const Header = (props) => {
  return(
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return(
    <p>{props.part} {props.exercises}</p>
  )
}
const Content = (props) => {
  return(
    <div>
     <Part part = {props.parts[0]} exercises = {props.exercises[0]}></Part>
     <Part part = {props.parts[1]} exercises = {props.exercises[1]}></Part>
     <Part part = {props.parts[2]} exercises = {props.exercises[2]}></Part>
     {console.log(props)}
    </div>
  )
}

const Total = (props) => {
  return(
    <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
  )
}


const App = () => {
   
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      }
    ],
  }
  
  
  console.log('hi')
  return (
    <div>
      <Header course = {course.name}></Header>
      <Content parts = {[course.parts[0].name, course.parts[1].name, course.parts[2].name]} exercises = {[course.parts[0].exercises,course.parts[1].exercises,course.parts[2].exercises]}></Content>
      <Total exercises1 = {course.parts[0].exercises} exercises2 = {course.parts[1].exercises} exercises3 = {course.parts[2].exercises}></Total>
    </div>
  )
}

export default App