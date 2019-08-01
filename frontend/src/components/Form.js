import React, {useState, useEffect} from "react";
import axios from "axios";

const listOfPasswords=[]
const listOfEmails=[]
let count=0

const Form = (props) => {
    const [state, setState] = useState({
        Id: {count},
        Application: "",
        EmailAddress: "",
        Password: ""
    })


    const [pw, setPw] = useState("Press Button Again");
    const [em, setEm] =useState("Press Button Again");
  

    useEffect(() => {
        setState(props.adjustedValue)},
        [props.adjustedValue])
    



    const generatePassword = (action) =>{
        action.preventDefault();
        axios.get("https://cors-anywhere.herokuapp.com/https://email-pass-gen.herokuapp.com/password")
        .then( pw =>{
            setPw(pw.data.password)
        })
        .catch(error =>{
            return "Error"
        })

        listOfPasswords.push(pw)
        state.Password=listOfPasswords[listOfPasswords.length-1]
        
        
   
    }
    const generateEmail = (action) =>{
        action.preventDefault();
        axios.get("https://cors-anywhere.herokuapp.com/https://email-pass-gen.herokuapp.com/email")
        .then( em =>{
            setEm(em.data.email)
        })
        .catch(error =>{
            return "Error"
        })

        listOfEmails.push(em)
        state.EmailAddress=listOfEmails[listOfEmails.length-1]
       
         
    }

   


    const change = (action) =>{
        setState({
            ...state, [action.target.name]: action.target.value
        });

    }

    const click = (action) =>{
        action.preventDefault();
        if (props.application === true){
            props.editApplication({...state, [action.target.name]: action.target.value})
            props.applicationToEdit(false)
            count+=1
        } else{
            props.setList([...props.list, state])
            count+=1
        }

    };

    console.log(state)

    return(
        <form>
        

            <label>Application: </label><br/><br/>
            <input type="text" name="Application" value={state.Application} onChange={change}/><br/><br/>
            


            <button onClick={generateEmail}>Email Address</button><br/><br/>
            <input type="text" name="EmailAddress" value={state.EmailAddress} onChange={change}/><br/><br/>



            <button onClick={generatePassword}>Password</button><br/>
            <input type="text" name="Password" id="password" value={state.Password} onChange={change} /><br/><br/>               


            <button type="submit"  onClick={click}>Save</button>



        </form>
    );
}

export default Form;