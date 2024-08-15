import {useState} from 'react'

const Butt = ({text, handleClick}) => <button onClick={handleClick}>{text}</button>

const AnecdotesSection = ({text, votes, anecdotes})=>{
    return (<div>
        <h1>{text}</h1>
        <p>{anecdotes}</p>
        <p>has {votes} votes</p>
    </div>)
}
const App = () => {
    const anecdotes = [
      'If it hurts, do it more often.',
      'Adding manpower to a late software project makes it later!',
      'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
      'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      'Premature optimization is the root of all evil.',
      'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
      'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
      'The only way to go fast, is to go well.'
    ]
    
    const [selected, setSelected] = useState(0);
    const [votes, setVotes] = useState(Array(8).fill(0));
    const max = Math.max(...votes);
    
    const handleVotes = () => {
        const copy = [...votes];
        copy[selected]+=1;
        setVotes(copy);
    }
    //console.log(votes);
    const handleChangeAnec = () =>
        {
            const len = anecdotes.length;
            let random = Math.floor(Math.random()*(len));
            setSelected(random);
            //console.log(selected);
        }
    //console.log(anecdotes[votes.indexOf(mostVotes)]);
    //console.log(votes);
    return (
      <>
        <AnecdotesSection text={'Anecdote of the day'} votes={votes[selected]} anecdotes={anecdotes[selected]}> </AnecdotesSection>
        <Butt text={'vote'} handleClick={handleVotes}></Butt>
        <Butt text={'next anecdote'} handleClick={handleChangeAnec}></Butt>
        <AnecdotesSection text={'Anecdote with most votes'} votes={max} anecdotes={anecdotes[votes.indexOf(max)]}> </AnecdotesSection>
      </>
    )
  }
export default App;