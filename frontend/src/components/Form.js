import React, {useState, useEffect} from "react";


const Form = (props) => {
    const [state, setState] = useState({
        Application: "",
        EmailAddress: "",
        Password: ""
    })

    useEffect(() => {
        setState(props.adjustedValue)},
        [props.adjustedValue])
    
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
        <form onSubmit={click}>

                <label>Application: </label>
                <input type="text" name="Application" value={state.Application} onChange={change}/>
                
                <label>Email Address</label>
                <button>Generate</button>
                <input type="text" name="EmailAddress" value={state.EmailAddress} onChange={change}/>

                <label>Password</label>
                <button>Generate</button>
                <input type="text" name="Password" value={state.Password} onChange={change}/>

                <button>Save</button>

        </form>
    );
}

export default Form;