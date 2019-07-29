import React from "react" 
import logo from "../images/mockup2.png"; 
import styled from "styled-components"; 

export default function Landing() {
  
  const StyleH1 = styled.h1`
  font-size: 2.5rem; 
  font-color: darkgray;
  margin-top: -2rem; 
  color: #B1B1B1; 
  `

  const StyleForm = styled.form`
  display: flex;
  flex-direction: column; 
  margin: 0 auto; 
  text-align: center; 
  width: 200px;  
  `
  
  const StyleInput = styled.input`
  
  `

  return (
    <div>
        <img src={logo} alt="loganon logo"></img>
        <StyleH1>Care-free Account Creation</StyleH1>
        <StyleForm>
            <StyleInput 
            placeholder="Unique User Key"
            name="userkey"
            />
            <button>Generate Random User Key</button>
            <StyleInput
            placeholder="User Email"
            name="email"
            />
            <button type="submit">Submit</button>
        </StyleForm>
      </div>
  )
} 
