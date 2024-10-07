import { useState } from 'react'
import Filter from './Filter';
import PersonForm from './PersonForm';
import Persons from './Persons';
const App = () => {

    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456', id: 1 },
        { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
        { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
        { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
      ])
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  const onNameChange = (e) => {
    const temp = e.target.value;
    setNewName(temp);
    //console.log(temp);
  }

  const onSub = (e) => {
    e.preventDefault();
    //console.log(e);
    setNewName('');
    setNewNumber('');
    const newObj = [{name: newName, number: newNumber}];
    const exist = persons.find(person => person.name === newName);
    if(exist){
      alert(newName + ' is already added');
    }
    else{
      const temp = persons.concat(newObj);
      setPersons(temp);
      //console.log(temp);
    }
  }
  const onNumberChange = (e)=>{
    const provisionalNum = e.target.value;
    setNewNumber(provisionalNum);
  }
  const onFilterChange = (e) => {
    const filterValue = e.target.value;
    setFilter(filterValue);
  }
 

  

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} onFilterChange={onFilterChange}></Filter>  
      <h2>Add a new</h2>
      <PersonForm onSub={onSub} newName={newName} newNumber={newNumber} onNameChange={onNameChange} onNumberChange={onNumberChange}></PersonForm>
      <h2>Numbers</h2>
      <Persons filter={filter} persons={persons}></Persons>
    </div>
  )
}

export default App