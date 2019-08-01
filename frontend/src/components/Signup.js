import React, { useState, useEffect } from "react" 
import axios from "axios"; 
import logo from "../images/LoganonLogoRoundLighter.png"; 
import styled from "styled-components"; 
import { Link } from "react-router-dom"; 

export default function Signup() {

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

    const StyleButton = styled.button`
    margin-top: 0rem; 
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
    margin: -4rem auto 0 auto; 
    align-items: center; 
    `

    // const StyleLogin = styled.button`
    // width: 20%; 
    // height: 30px; 
    // background: yellow; 
    // text-align: center; 
    // border: 1px solid #ffe100; 
    // border-radius: 20px; 
    // font-weight: 600; 
    // font-size: 1rem;  
    // margin-top: 2rem; 
    // `

    const StyleSignup = styled.button`
    width: 220px; 
    height: 30px; 
    background: #ffe100; 
    text-align: center; 
    border: 1px solid #ffe100; 
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

    axios.get('https://cors-anywhere.herokuapp.com/https://email-pass-gen.herokuapp.com/password')
    .then(response => {
      console.log('Success', response)
      setPassword(response.data.password);
    })
    .catch(error => { 
      console.log('Something went wrong:', error); 
    })  

    
  }, []) 

  const  [ inputValue, setInputValue ] = useState({ userkey: "", password: "", confirmPassword: ""}); 

  function handleChange(event) {
    const newInput = { ...inputValue, [event.target.name]: event.target.value }; 
    
    setInputValue(newInput); 
    // console.log(document.getElementsByTagName('input'))
  }

  // const state = useState({ password: '', confirmPassword: '' })

  // function handleSubmit() {
  //   const { password, confirmPassword } = state;

  //   if (password !== confirmPassword) {
  //       alert("Passwords don't match");
  //   } else {
  //     document.location.href = `http://localhost:3000/signup`
  //   }
  // }


  function generateId(event) { 
      // window.location.reload(); 
      event.preventDefault();
      document.getElementById('userkey').value = Date.now(); 
    }
  
    function generatePassword(event) {
      event.preventDefault(); 
      // window.location.reload(); 
      document.getElementById('password').value = password;
      document.getElementById('confirm-password').value = password;  
    }

      return (
        <div>
        <StyleImg src={logo} alt="loganon logo"></StyleImg>
        <StyleH1>Carefree Account Creation</StyleH1>
        <StyleH2>Sign Up</StyleH2>
        <form className="login-form">
          <label className="top-label">
            Unique User Key:<br></br>
            <input id="userkey" className="input-styles"
            placeholder='Input or click "Generate"'
            type="text"
            name="userkey"
            onChange={handleChange} 
            value={inputValue.userkey}
            />
          </label>
          <StyleButton onClick={generateId}>Generate</StyleButton>
          <label className="top-label">
            Password:<br></br>
            <input id="password" className="input-styles"
            placeholder='Input or click "Generate"'
            name="password"
            onChange={handleChange} 
            value={inputValue.password}
            />
          </label>
          <StyleButton onClick={generatePassword}>Generate</StyleButton>
          <label className="top-label">
            Confirm Password:<br></br>
            <input id="confirm-password" className="input-styles"
            placeholder="Confirm password"
            name="confirmPassword"
            onChange={handleChange}
            value={inputValue.confirmPassword}
            />
          </label>
        </form>
        <StyleButtonContainer>
          <Link to="/home"><StyleSignup>Sign Up</StyleSignup></Link>
        </StyleButtonContainer>
      </div>
      )
}
