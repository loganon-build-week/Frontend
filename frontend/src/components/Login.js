import React, { useState } from "react"
import logo from "../images/LoganonLogoRoundLighter.png";
import styled from "styled-components";
import { Route, Link } from "react-router-dom";

function Landing() {

  const StyleImg = styled.img`
  margin: 5rem; 
  `
  
  const StyleH1 = styled.h1`
  font-size: 2.5rem; 
  font-color: darkgray;
  margin-top: -2rem; 
  color: #B1B1B1; 
  font-family: "Russo One", sans-serif; 
  font-weight: 500; 
  `

  const StyleH2 = styled.h2`
  font-size: 2rem; 
  font-color: darkgray; 
  color: #B1B1B1; 
  font-family: "Russo One", sans-serif; 
  font-weight: 500;   
  `

  const StyleButtonContainer = styled.div`
  display: flex; 
  flex-direction: column; 
  text-align: center; 
  margin: -2rem auto 0 auto; 
  align-items: center; 
  `

  const StyleLogin = styled.button`
  width: 220px; 
  height: 30px; 
  background: yellow; 
  text-align: center; 
  border: 1px solid #ffe100; 
  border-radius: 20px; 
  font-weight: 600; 
  font-size: 1rem;  
  margin-top: 2rem; 
  `

  const StyleSignup = styled.button`
  width: 220px; 
  height: 30px; 
  background: #B1B1B1; 
  text-align: center; 
  border: 1px solid #B1B1B1; 
  border-radius: 20px; 
  font-weight: 600; 
  font-size: 1rem;  
  margin-top: 2rem;
  `

  const  [ inputValue, setInputValue ] = useState({ userkey: "", password: "" }); 

  function handleChange(event) {
    const newInput = { ...inputValue, [event.target.name]: event.target.value }; 
    
    setInputValue(newInput); 
    // console.log(document.getElementsByTagName('input'))
  }

  return (
    <div>
        <StyleImg src={logo} alt="loganon logo"></StyleImg>
        <StyleH1>Carefree Account Creation</StyleH1>
        <StyleH2>Login</StyleH2>
        <form className="login-form">
          <label>
            <input id="userkey" className="input-styles"
            placeholder="Unique User Key"
            type="text"
            name="userkey"
            onChange={handleChange}
            value={inputValue.userkey}
            />
          </label>
          <label>
            <input id="password" className="input-styles"
            placeholder="Password"
            name="password"
            type="password"
            onChange={handleChange}
            value={inputValue.password}
            />
          </label>
        </form>
        <StyleButtonContainer>
          <Link to="/home" ><StyleLogin>Login</StyleLogin></Link>
          <Link to="/signup"><StyleSignup>Sign Up</StyleSignup></Link>
        </StyleButtonContainer>
      </div>
  )
} 

export default Landing; 