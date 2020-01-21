import React from 'react';
import logo from './logo.svg';
import './App.css';


const Person = ({ person, children }) => {
  const { name, job, gender, number } = person;
  const url = `https://randomuser.me/api/portraits/thumb/${gender}/${number}.jpg`;

  return (
    <div className="person">
      <img src={url} alt=""/>
      <h4>{name}</h4>
      <h4>{job}</h4>
      <h5>{children}</h5>
    </div>
  )
};






const PersonList = () => {
  const people = [
    {
      name: 'john',
      age: 22,
      job: 'developer',
      gender: 'men',
      number: 10,
    },
    {
      name: 'wook',
      age: 26,
      job: 'designer',
      gender: 'men',
      number: 20,
    },
    {
      name: 'nay',
      age: 22,
      job: 'student',
      gender: 'women',
      number: 10,
    },
  ];

  return (
    <>
      {people.map(person => (
        <ul>
          <li key={person.name}>
            <Person person={person}>
              Hi! I'm {person.name}
            </Person>
          </li>
        </ul>
      ))}
    </>
  )
};





const App = () => (<PersonList/>)

export default App;
