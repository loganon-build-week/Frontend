import React from 'react';
import './App.css';
import Landing from "./components/Landing"; 
import styled from "styled-components"; 

function App() {

  const StyleDiv = styled.div`
  background: #3A3A3A; 
  `
  return (
    <StyleDiv className="App">
      <Landing />
    </StyleDiv>
  );
}

export default App;
