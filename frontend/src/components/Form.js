import React, {useState, useEffect} from "react";
import axios from "axios";

const listOfPasswords=[]
const listOfEmails=[]

const Form = (props) => {
    const [state, setState] = useState({
        Application: "",
        EmailAddress: "",
        Password: ""
    })

    const [pw, setPw] = useState("");
    const [em, setEm] =useState("");
  

    useEffect(() => {
        setState(props.adjustedValue)},
        [props.adjustedValue])
    



    const generatePassword = (action) =>{
        action.preventDefault();
        axios.get("https://cors-anywhere.herokuapp.com/https://email-pass-gen.herokuapp.com/password")
        .then( pw =>{
            // state.Password = pw.data
            setPw(pw.data.password)
        })
        .catch(error =>{
            return "Error"
        })

        listOfPasswords.push(pw)
        if(state.Password === listOfPasswords[listOfPasswords.length-1]){
            listOfPasswords.push(state.Password)
        }else{
            state.Password=listOfPasswords[listOfPasswords.length-1]
        }
        
   
    }
    const generateEmail = (action) =>{
        action.preventDefault();
        axios.get("https://cors-anywhere.herokuapp.com/https://email-pass-gen.herokuapp.com/email")
        .then( em =>{
            console.log(em.data.email)
            // state.Password = pw.data
            setEm(em.data.email)
        })
        .catch(error =>{
            return "Error"
        })

        listOfEmails.push(em)
        if(state.EmailAddress === listOfEmails[listOfEmails.length-1]){
            listOfEmails.push(state.EmailAddress)
        }else{
            state.EmailAddress=listOfEmails[listOfEmails.length-1]
        }
         
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
        } else{
            props.setList([...props.list, state])
        }
    };

 

    return(
        <form>
                <label>Application: </label>
                <input type="text" name="Application" value={state.Application} onChange={change}/>
                
                <label>Email Address</label>
                <button onClick={generateEmail}>Generate</button>
                <input type="text" name="EmailAddress" value={state.EmailAddress} onChange={change}/>

                <label>Password</label>
                <button onClick={generatePassword}>Generate</button>
                <input type="text" name="Password" id="password" value={state.Password} onChange={change} />


                <button type="submit"  onClick={click}>Save</button>


        </form>
    );
}

export default Form;