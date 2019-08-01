import React, { useState } from 'react';
import './App.css';
import MainForm from './components/MainForm.js';
import AppCard from './components/AppCard'

// import DataToPass from "./Components/DataToPassToForm.js";
// import Login from "./components/Login"; 
// import Signup from "./components/Signup"; 
import { Route, Link } from "react-router-dom"; 



function App() {
  const [users, setUsers] = useState([
    {id: 1, email: "v.a@gmail.com", password: "PasswordSun", application: "Twitter"},
    {id: 2, email: "a.b@gmail.com", password: "PasswordMoon", application: "Netflix"}
  ]);

  const addAppCard = person => {
    setUsers([...users, person])
  };

  return (
    <div className="App">
      <Link to="/home">My Apps</Link>  
      <Link to="/add">Add App</Link>

      <Route exact path="/home" 
             render={props => users.map(person => <AppCard person={person} /> )} 
      />

      <Route path="/add" 
             render={props => <MainForm {...props} 
                                        submitUser={addAppCard} 
                              /> } 
      />
     
      <Route path="/home/:id" 
             render={props => {
               console.log(props);
               const card = users.find(person => person.id.toString() === props.match.params.id)
               return (
                  <div> 
                    <h1>{card.application}</h1>
                    <h2>Email Address: {card.email}</h2>
                    <h2>Password: {card.password}</h2>
                    <button>Edit</button>
                  </div>
                )
             }}
      />

      
    </div>
  );

}

export default App;
