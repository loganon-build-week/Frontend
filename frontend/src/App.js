import React, { useState } from 'react';
import './App.css';
import { Route, Link } from "react-router-dom"; 
import MainForm from './components/MainForm.js';
import AppCard from './components/AppCard'
// import DataToPass from './components/DataToPassToForm';
import Login from "./components/Login.js";
import Signup from "./components/Signup.js";  



function App() {
  const [users, setUsers] = useState([
  //   {id: 1, email: "v.a@gmail.com", password: "PasswordSun", application: "Twitter"},
  //   {id: 2, email: "a.b@gmail.com", password: "PasswordMoon", application: "Netflix"}
  ]);

  const addAppCard = person => {
    setUsers([...users, person])
  };

  return (
    <div className="App">

      <Route exact path="/" component={Login} />

      <Route exact path="/signup" component={Signup} />

      <Link to="/home" className="Nav">My Apps</Link>

      <Link to="/add" className="Nav">Add App</Link>



      <Route exact path="/home" 
             render={props => users.map(person => <AppCard person={person}  /> )} 
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
                  </div>
                )
             }}
      />

      
    </div>
  );

}

export default App;