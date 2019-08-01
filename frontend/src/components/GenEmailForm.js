// import React, {useState, useEffect} from "react";
// import axios from "axios";

// export default 

// function GenEmailForm() {
//     const [email, setEmail] = useState([])

//     useEffect( () => {
//         axios.get(`https://email-pass-gen.herokuapp.com/email`)
//         .then ( response => {
//             setEmail(response.data.email)
//         })

//         .catch (error => {console.log('error in email API')})

//     }, [])

//     console.log(email)

//     return (
//         <section>
//           {email.map((item) => <MainForm key={item.id} 
//                                              {...item}/>
    
//           )}
    
//         </section>
//       );
// }
