import React, {useState, useEffect} from "react";
import axios from "axios";

const Form = (props) => {
    const [state, setState] = useState({
        Application: "",
        EmailAddress: "",
        Password: ""
    })

    // const [pw, setPw] = useState("");
    // const [bool, setBool] = useState(false)

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

    // const generate = (action) =>{
    //     action.preventDefault();
    //     if (bool === true){ 
    //         state.Password = pw;
    //     } else{

    //     }
        
    // }



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
                    <button>Generate</button>
                    <input type="text" name="Password" value={state.Password} onChange={change}/>


                 <form onSubmit={click}>
                     <button type="submit" >Save</button>
                </form>

        </form>
    );
}

export default Form;