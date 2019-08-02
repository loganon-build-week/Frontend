import React, {useState } from "react";
import axios from "axios";
import styled from "styled-components";
import '../MainForm.css';

const FormContainer = styled.div `
  background: rgba(0, 0, 0, 0.1);
  display: flex;
  flex-wrap: wrap;
  width: 25%;
  border-radius: 8px;
  justify-content: center;
  margin: 20px;
`;

const AppSelector=styled.div `
  width: 99%;
  margin-bottom: 45px;
`;

const FieldContainer =styled.div `
  width: 99%;
  display: flex;
  justify-content: space-around;
  margin-bottom: 50px;
`;

const SubmitButton = styled.div`
  width: 99%;
`;

const MainForm = (props) => {
  // console.log(props)

  const { submitUser, applicationCard } = props 

  const [person, setPerson] = useState(applicationCard || {id: Date.now(), email: "", password: "", application: "" });

  const changeHandler = (event) => {
    setPerson({...person, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("within handleSubmit", person);
    submitUser(person);
    // console.log(person);
    setPerson({id: Date.now(), email: "", password: "", application: ""})
  };

  //start email API
  function GenEmailForm() {
    axios.get(`https://cors-anywhere.herokuapp.com/https://email-pass-gen.herokuapp.com/email`)
    .then (response => {
        setPerson({ ...person, email: response.data.email });
        // console.log(response)
        console.log(person)
    })
    .catch (error => {console.log('error in email API')})
  }
  // finish email API


  // start password API
  function GenPasswordForm() {
    axios.get(`https://cors-anywhere.herokuapp.com/https://email-pass-gen.herokuapp.com/password`)
    .then ( response => {
        setPerson({...person, password: response.data.password })
        console.log(person)
    })
    .catch (error => {console.log('error in password API')})
  }
  //finish password API


  return (
    <div className="ContainerComp">
      <FormContainer>
        <form onSubmit={handleSubmit} className="SubmitAppForm">
          <AppSelector>
            <select required name="application" onChange={changeHandler} className="AppSelector"> 
              <option value="" hidden default>Select an App</option>
              <option value="Apple">Apple</option>
              <option value="Slack">Slack</option>
              <option value="Medium">Medium</option>
              <option value="Netflix">Netflix</option>
              <option value="Twitter">Twitter </option>
              <option value="Yelp">Yelp</option>
              <option value="YouTube">YouTube</option>
              {/* planning to add "other" functionality at another time */}
              {/* <option value={false} >Other</option> */}
            </select>
          </AppSelector>

          <FieldContainer> 
            <button type="button" onClick={GenEmailForm} className="FieldContainerBttn">Email</button>
            <input 
              className="FieldContainerInput"
              placeholder="Generated Email" 
              readonly=""
              type="email"
              value={person.email}
              name="email"
              onChange={changeHandler}
            />
          </FieldContainer>

          <FieldContainer>
            <button type="button" onClick={GenPasswordForm} className="FieldContainerBttn">Password</button>
            <input 
              className="FieldContainerInput"
              placeholder="Generated Password" 
              readonly=""
              value={person.password}
              name="password"
              onChange={changeHandler}
            />
          </FieldContainer>

          <SubmitButton>
            <button type="submit" className="SubmitAppFormBttn">Add App Card</button>
          </SubmitButton>

        </form>
      </FormContainer>
    </div>
  )
}

export default MainForm;