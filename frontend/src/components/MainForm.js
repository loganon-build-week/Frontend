import React, { useState } from "react" 

const MainForm = (props) => {
  // console.log(props)
  const { submitUser } = props 
  const [person, setPerson] = useState({id: Date.now(), email: "", password: "", application: "" });

  const changeHandler = (event) => {
    setPerson({...person, [event.target.name]: event.target.value})
    // console.log(person.application);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("within handleSubmit", person);
    submitUser(person);
    setPerson({id: Date.now(), email: "", password: "", application: ""})
    // console.log(person);
  };
  console.log(person);

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

      <button type="button">Email</button>
      <input 
        placeholder="generated email" 
        type="email"
        value={person.email}
        name="email"
        onChange={changeHandler}
      />

      <button type="button">Password</button>
      <input 
        placeholder="generated password" 
        value={person.password}
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
