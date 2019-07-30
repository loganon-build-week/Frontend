import React from "react" 
import logo from "../images/mockup2.png"; 
import styled from "styled-components"; 

export default function Landing() {
  
  const StyleH1 = styled.h1`
  font-size: 2.5rem; 
  font-color: darkgray;
  margin-top: -2rem; 
  color: #B1B1B1; 
  font-family: "Russo One", sans-serif; 
  font-weight: 500; 
  `

  const StyleForm = styled.form`
  display: flex;
  flex-direction: column; 
  margin: 4rem auto; 
  text-align: center;   
  `
  
  const StyleInput = styled.input`
    margin-top: 2rem;
    text-decoration: none; 
    border-radius: 5px; 
    width: 400px; 
    height 30px;
    margin: 0 auto;   
    font-size: 1.1rem; 
    border: 1px solid white; 
  `

  const StyleButton = styled.button`
  margin-top: .5rem; 
  width: 13%; 
  height: 30px; 
  background: yellow; 
  text-align: center; 
  margin .5rem auto 2rem auto; 
  border: 1px solid yellow; 
  border-radius: 5px; 
  font-weight: 600; 
  font-size: 1rem;  
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
            <StyleButton type="submit">Generate</StyleButton>
          <StyleInput
          placeholder="User Email"
          name="email"
          />
            <StyleButton type="submit">Generate</StyleButton>
        </StyleForm>
      </div>
  )
} 
