import React, {useState, useEffect} from "react";
import axios from "axios";
import {Card, Button} from 'semantic-ui-react';

const App = (props) =>{
    console.log(props)

    const [pw, setPw] = useState("");

    useEffect(()=>{
        axios.get("http://www.sethcardoza.com/api/rest/tools/random_password_generator/length:12")
        .then( pw =>{
            setPw(pw.data)
        })
        .catch(error =>{
            return "Error"
        })
    },[props])
    console.log(pw)

    props.props.password=pw;

    return (
        <div>
            {props.props.map(app =>{
                console.log(app)
                
                return(
                    <Card.Group>
                        
                        <Card key={app.Application}>
                             <Card.Header>Application: {app.Application}</Card.Header>
                             <Card.Content>Email Address: {app.EmailAddress}</Card.Content> 
                             <Card.Content>Password: {app.Password}</Card.Content> 
                             <Button type="submit" onClick={() =>{
                                 props.setAdjustedValue(app);
                                 props.applicationToEdit(true)
                             }}>Edit</Button>
                        </Card>

                    </Card.Group>
                    
                )

            })}
        </div>
    )
}

export default App;
