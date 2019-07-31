import React, {useState, useEffect} from "react";
import axios from "axios";

const listOfPasswords=[]

const Form = (props) => {
    const [state, setState] = useState({
        Application: "",
        EmailAddress: "",
        Password: ""
    })

    const [pw, setPw] = useState("");
  

    useEffect(() => {
        setState(props.adjustedValue)},
        [props.adjustedValue])
    
    // useEffect(()=>{
    //     axios.get("http://www.sethcardoza.com/api/rest/tools/random_password_generator/length:12")
    //     .then( pw =>{
    //         setPw(pw.data)
    //     })
    //     .catch(error =>{
    //         return "Error"
    //     })
    // },[])



    const generate = (action) =>{
        action.preventDefault();
        axios.get("http://www.sethcardoza.com/api/rest/tools/random_password_generator/length:12")
        .then( pw =>{
            // state.Password = pw.data
            setPw(pw.data)
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
        
        // document.getElementById('password').value=pw
        // console.log(state.password)   
    }
    
    
    console.log(listOfPasswords)
   


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
                <button>Generate</button>
                <input type="text" name="EmailAddress" value={state.EmailAddress} onChange={change}/>

                <label>Password</label>
                <button onClick={generate}>Generate</button>
                <input type="text" name="Password" id="password" value={state.Password} onChange={change} />


                <button type="submit"  onClick={click}>Save</button>


        </form>
    );
}

export default Form;