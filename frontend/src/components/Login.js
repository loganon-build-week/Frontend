import React, { useState, useEffect } from "react" 
import logo from "../images/LoganonLogoRoundLighter.png"; 
import styled from "styled-components";
import axios from "axios"

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

  const StyleButton = styled.button`
  margin-top: rem; 
  width: 13%; 
  height: 30px; 
  background: #B1B1B1; 
  text-align: center; 
  margin .5rem auto 2rem auto; 
  border: 1px solid white; 
  border-radius: 5px; 
  font-weight: 600; 
  font-size: 1rem;  
  border: 1px solid #B1B1B1; 
  `

  const StyleButtonContainer = styled.div`
  display: flex; 
  flex-direction: column; 
  text-align: center; 
  margin: 0rem auto 0 auto; 
  align-items: center; 
  `

  const StyleLogin = styled.button`
  width: 20%; 
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
  width: 20%; 
  height: 30px; 
  background: #B1B1B1; 
  text-align: center; 
  border: 1px solid #B1B1B1; 
  border-radius: 20px; 
  font-weight: 600; 
  font-size: 1rem;  
  margin-top: 2rem;
  `
  const [userkey, setUserkey] = useState(""); 

  useEffect(() => {

    axios.get('https://cors-anywhere.herokuapp.com/http://www.sethcardoza.com/api/rest/tools/random_password_generator')
    .then(response => {
      console.log('Success', response)
      setUserkey(response.data);
    })
    .catch(error => { 
      console.log('Something went wrong:', error); 
    })  

    
  }, []) 

  const [password, setPassword] = useState(""); 

  useEffect(() => {

    axios.get('https://cors-anywhere.herokuapp.com/http://www.sethcardoza.com/api/rest/tools/random_password_generator')
    .then(response => {
      console.log('Success', response)
      setPassword(response.data);
    })
    .catch(error => { 
      console.log('Something went wrong:', error); 
    })  

    
  }, []) 

  const  [ inputValue, setInputValue ] = useState({ userkey: "", password: "" }); 

  function handleChange(event) {
    const newInput = { ...inputValue, [event.target.name]: event.target.value }; 
    
    setInputValue(newInput); 
    // console.log(document.getElementsByTagName('input'))
  }

  function generateId(event) { 
    // window.location.reload(); 
    event.preventDefault();
    document.getElementById('userkey').value = userkey; 
  }

  function generatePassword(event) {
    event.preventDefault(); 
    // window.location.reload(); 
    document.getElementById('password').value = password; 
  }
  

  return (
    <div>
        <StyleImg src={logo} alt="loganon logo"></StyleImg>
        <StyleH1>Care-free Account Creation</StyleH1>
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
          <StyleButton onClick={generateId}>Generate</StyleButton>
          <label>
            <input id="password" className="input-styles"
            placeholder="Password"
            name="password"
            type="password"
            onChange={handleChange}
            value={inputValue.password}
            />
          </label>
          <StyleButton onClick={generatePassword}>Generate</StyleButton>
        </form>
        <StyleButtonContainer>
          <StyleLogin>Login</StyleLogin>
          <StyleSignup>Sign Up</StyleSignup>
        </StyleButtonContainer>
      </div>
  )
} 

export default Landing; 