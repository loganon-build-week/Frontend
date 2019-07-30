import React, { useState, useEffect } from "react" 
import axios from "axios"; 
import logo from "../images/mockup2.png"; 

export default function Login() {
    const [data, setData] = useState([]); 

//   useEffect(() => {

//     axios.get('https://rapidapi.com/Privatix/api/temp-mail/details/format/json/ ')
//     .then(response => {
//       console.log('Success', response)
//       setData(response.data);
//     })
//     .catch(error => { 
//       console.log('Something went wrong:', error); 
//     })  

    
//   }, []) 

  return (    
   <div>
        <img src={logo} alt="loganon logo"></img>
        <form>
            <input 
            placeholder="Unique User Key"
            name="userkey"
            />
            <button>Generate Random User Key</button>
            <input
            placeholder="User Email"
            name="email"
            />
            <button type="submit">Submit</button>
        </form>
    </div>
)
}