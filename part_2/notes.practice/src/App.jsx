import Note from './components/Note'
import { useState } from 'react'

const App = ( props ) => {
  const[notes , setNotes] = useState(props.notes);
  const[newNote , setNewNotes] = useState('new note...');
  const[showAll, setShowAll] = useState(true);
  //console.log(notes)
  const addNote = (event) => {
    event.preventDefault();
    console.log('button clicked', event.target)
    const newObj = {
      content: newNote,
      important: Math.random() < 0.5,
      id: notes.length + 1, 
    }
    const temp = notes.concat(newObj)
    setNotes(temp);
    console.log(notes);
    setNewNotes('new notes...');
  }
  const onChange = (e) => {
    console.log(e.target);
    setNewNotes(e.target.value);
  }
  const onFocus = () => {
    setNewNotes('');
  }
  const handleClick = () => setShowAll(!showAll)
  const notesToShow = showAll? notes : notes.filter(note => note.important)
  return (
    <div>
      <h1>Notes</h1>
      <button onClick={handleClick}>show {showAll? 'important': 'all'}</button>
      <ul>
        {notesToShow.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <label htmlFor="NewNote"></label>
        <input value={newNote} onChange={onChange} onFocus={onFocus}></input>
        <button type='submit'>save</button>
      </form>
    </div>
  )
}

export default App