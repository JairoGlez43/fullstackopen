const Header = ({ name }) => <h2>{name}</h2>

const Total = ({ sum }) => <h4>Number of exercises {sum}</h4>

const Part = ({name,exercises }) => 
  <p>
    {name} {exercises}
  </p>

const Content = ({ parts }) =>{
  return(<>
    {parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises}/>)}
  </>)
} 
  
const Course = ({course})=>{
  const copyExercise = course.parts.map(part => part.exercises);
  const total = copyExercise.reduce((a,b)=>a+b)
  
  return (<>
    <Header name={course.name}></Header>
    <Content parts={course.parts}></Content>
    <Total sum={total}></Total>
  </>)
}

export default Course;