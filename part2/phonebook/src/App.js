import { useState } from 'react'

const Persons = ({persons, filter}) => {
  return (
    persons
    .filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
    .map(person => <p key={person.name}>{person.name} {person.phone}</p> )
  )
}
const Filter = ({handleFilterChange}) => {
  return(
    <div>
      filter shown with: <input onChange={handleFilterChange}/>
    </div>
  )
}
const PersonForm = ({submitPhone, handleNameChange, handlePhoneChange}) => {
  return(
    <form onSubmit={submitPhone}>
        <div>
          name: <input onChange={handleNameChange}/>
        </div>
        <div>
          number: <input onChange={handlePhoneChange}/>
          </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456'},
    { name: 'Ada Lovelace', phone: '39-44-5323523'},
    { name: 'Dan Abramov', phone: '12-43-234345'},
    { name: 'Mary Poppendieck', phone: '39-23-6423122'}
    
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const submitPhone = (event) => {
    event.preventDefault();
    if(persons.find(person => person.name === newName)){
      alert(`${newName} is already added to phonebook`)
    }
    else {
      setPersons(persons.concat({name: newName, phone:newPhone}));
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }
  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value);
  }
  const handleFilterChange = (event) => {
    setNewFilter(event.target.value);
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilterChange={handleFilterChange}/>
      <h2>Add a new</h2>
      <PersonForm submitPhone={submitPhone} handleNameChange={handleNameChange} handlePhoneChange={handlePhoneChange}/>
      <h2>Numbers</h2>
      <Persons persons={persons} filter={newFilter}/>
    </div>
  )
}

export default App