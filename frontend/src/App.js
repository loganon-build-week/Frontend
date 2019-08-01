import React, { useState } from 'react';
import './App.css';
import MainForm from './components/MainForm.js';
import AppCard from './components/AppCard'
import DataToPass from './components/DataToPassToForm';

// import DataToPass from "./Components/DataToPassToForm.js";
import Login from "./components/Login"; 
import Signup from "./components/Signup"; 
import { Route, Link } from "react-router-dom"; 



function App() {

  return (
    <div className="App">
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/home" component={DataToPass} />
    </div>
  
  );



}

export default App;
