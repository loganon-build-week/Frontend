import React from "react";
import {Card, Button} from 'semantic-ui-react';

const App = (props) =>{
    console.log(props)
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
