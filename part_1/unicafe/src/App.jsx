import {useState} from 'react'

const Button = ({text, handleClick}) => {
  return(
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const StatisticLine = ({text, value}) =>{
  return(
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}


const Statistics = ({good,neutral,bad}) =>{
  const total = good + bad + neutral;
  const average = () => {
    return (((good*1)+(bad*(-1)))/total) 
  }
  const positive = () =>{
    return ((good/total)*100+"%")
  }
  if(total === 0){
    return <p>No Feedback Given</p>
  }
  return(<table>
    <tbody>
      <StatisticLine text={'good:'} value={good}></StatisticLine>
      <StatisticLine text={'neutral:'} value={neutral}></StatisticLine>
      <StatisticLine text={'bad:'} value={bad}></StatisticLine>
      <StatisticLine text={'all:'} value={total}></StatisticLine>
      <StatisticLine text={'average:'} value={average()}></StatisticLine>
      <StatisticLine text={'positive:'} value={positive()}></StatisticLine>
    </tbody>
  </table>
  )
}
  


const App = ()=>{
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const onGoodClick = () => {
    setGood(newValue => newValue + 1);
  }
  const onNeutralClick = () => {
    
    setNeutral(newValue => newValue + 1);
  }
  const onBadClick = () => {
    
    setBad(newValue => newValue + 1);
  }
  

  return(
    <>
      <section>
        <h1>give feedback</h1>
        <Button text={'good'} handleClick={onGoodClick}></Button>
        <Button text={'neutral'} handleClick={onNeutralClick}></Button>
        <Button text={'bad'} handleClick={onBadClick}></Button>
      </section>
      <section>
        <h1>statistics</h1>
        <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
      </section>
    </>
  )
}
export default App;