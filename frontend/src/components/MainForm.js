import React, {useState } from "react";
import axios from "axios";

const MainForm = (props) => {
  // console.log(props)
  const { submitUser, applicationCard } = props 

   //email state
   const [email, setEmail] = useState("")

   //password state
   const [password, setPassword] = useState("")

  const [person, setPerson] = useState(applicationCard || {id: Date.now(), email: "", password: "", application: "" });

 

  const changeHandler = (event) => {
    setPerson({...person, [event.target.name]: event.target.value})
    console.log(person);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("within handleSubmit", person);
    submitUser(person);
    setPerson({id: Date.now(), email: "", password: "", application: ""})
    // console.log(person);
  };
  // console.log(person);


  //email API
  function GenEmailForm() {

    axios.get(`https://cors-anywhere.herokuapp.com/https://email-pass-gen.herokuapp.com/email`)
    .then ( response => {
        setEmail(response.data.email)
    })

    .catch (error => {console.log('error in email API')})
    // return email
    // setPerson({email:email})
    console.log("email API", setPerson)
  }
  // console.log("email API", person)

  //finish email API

  //password API
  function GenPasswordForm() {

    axios.get(`https://cors-anywhere.herokuapp.com/https://email-pass-gen.herokuapp.com/password`)
    .then ( response => {
        setPassword(response.data.password)
    })

    .catch (error => {console.log('error in password API')})
    return password
    // console.log("pass API")
  }
  // console.log("password API", person)
  //finish password API


  return (
    <form onSubmit={handleSubmit} >

      <select required name="application" onChange={changeHandler}> 
        <option value="" hidden default>Select an App</option>
        <option value="Twitter">Twitter </option>
        <option value="Slack">Slack</option>
        <option value="Netflix">Netflix</option>
        <option value="Lambda School">Lambda School</option>
        <option value={false} >Other</option>
      </select>

      <button type="button" onClick={GenEmailForm}>Email</button>
      <input 
        placeholder="generated email" 
        type="email"
        value={person.email}
        name="email"
        onChange={changeHandler}
      />

      <button type="button" onClick={GenPasswordForm}>Password</button>
      <input 
        placeholder="generated password" 
        value={password}
        name="password"
        onChange={changeHandler}
      />

      <button type="submit">Add App Card</button>

    </form>
  )



}

export default MainForm;




// export default function Login() {
 

//     useEffect(() => {

//     axios.get('https://rickandmortyapi.com/api/character/')
//     .then(response => {
//       console.log('Success', response)
//       setData(response.data.results);
//     })
//     .catch(error => {
//       console.log('Something went wrong:', error); 
//     })  

    
//   }, []) 

//   return (
//     <div>Login</div>
//   )
// } 

// `https://email-pass-gen.herokuapp.com/password`

// `https://email-pass-gen.herokuapp.com/email`
