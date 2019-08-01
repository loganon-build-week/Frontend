import React, { useState } from 'react';
import './App.css';
import { Route, Link } from "react-router-dom"; 
import MainForm from './components/MainForm.js';
import AppCard from './components/AppCard'
import DataToPass from './components/DataToPassToForm';

// import DataToPass from "./Components/DataToPassToForm.js";
import Login from "./components/Login";
import Signup from "./components/Signup.js";  



function App() {
  // const [users, setUsers] = useState([
  //   {id: 1, email: "v.a@gmail.com", password: "PasswordSun", application: "Twitter"},
  //   {id: 2, email: "a.b@gmail.com", password: "PasswordMoon", application: "Netflix"}
  // ]);

  // const addAppCard = person => {
  //   setUsers([...users, person])
  // };

  return (
    <div className="App">
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/home" component={DataToPass} />
      {/* <MainForm submitUser={addAppCard} /> 
      {users.map(person => <AppCard person={person} />)} */}
    </div>
  
  );



}

export default App;
