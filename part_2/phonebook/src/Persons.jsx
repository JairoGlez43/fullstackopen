const Persons = ({filter,persons}) => <ul>
{filter? persons.filter(p => p.name.toLowerCase().includes(filter.toLowerCase())).map(p => <li key={p.name}>{p.name} {p.number}</li>): persons.map(person => <li key={person.name}>{person.name} {person.number}</li>)}
</ul>

export default Persons;