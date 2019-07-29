import React, { useState, useEffect } from "react" 

export default function Login() {
    const [data, setData] = useState([]); 

  useEffect(() => {

    axios.get('https://rickandmortyapi.com/api/character/')
    .then(response => {
      console.log('Success', response)
      setData(response.data.results);
    })
    .catch(error => {
      console.log('Something went wrong:', error); 
    })  

    
  }, []) 

  return (
    <div>Login</div>
  )
} 
