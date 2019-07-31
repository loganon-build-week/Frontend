import React, { useState } from 'react';
import './App.css';
import MainForm from './components/MainForm.js';
import AppCard from './components/AppCard'


function App() {
  const [users, setUsers] = useState([
    {id: 1, email: "v.a@gmail.com", password: "PasswordSun", application: "Twitter"},
    {id: 1, email: "a.b@gmail.com", password: "PasswordMoon", application: "Netflix"}
  ]);

  const addPerson = person => {
    setUsers([...users, person])
  };

  return (
    <div className="App">
      <MainForm submitUser={addPerson} />
      {users.map(person => <AppCard person={person} />)}
    </div>
  );
}

export default App;
