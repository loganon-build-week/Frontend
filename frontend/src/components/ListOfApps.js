import React, {useState, useEffect} from "react";
import axios from "axios";
import {Card, Button} from 'semantic-ui-react';
import styled from "styled-components";
import { Link } from 'react-router-dom';


const Application = (props) =>{

    console.log(props)

        // text-align: center; 
        //  
    const StyleCard = styled.button`
    width: 20%; 
    height: 30%; 
    background: white; 
    color: black;
    border: 3px solid #ffe100; 
    border-radius: 2%; 
    text-align: left;
    font-weight: 600; 
    font-size: 1rem; 
    margin-left: 2rem;
    margin-top: 2rem;
 

    `
    const StyleAnswer = styled.p`
    color: grey;
    font-size: 1rem; 
    margin-top: 1rem;  
    `
    
    const StyleFlex = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    `

    return (
        <div>
            {props.props.map(app =>{
                console.log(app.Password)
                
                return(
                    <StyleCard /*onClick={}*/>
                    <StyleFlex>
                        <Card.Group>

                            <Card key={app.Application}>
                                <Card.Header>Application: <StyleAnswer>{app.Application}</StyleAnswer></Card.Header>
                                <Card.Content>Email Address: <StyleAnswer>{app.EmailAddress}</StyleAnswer></Card.Content> 
                                <Card.Content>Password: <StyleAnswer>{app.Password}</StyleAnswer> </Card.Content> 
                                <Button type="submit" onClick={() =>{
                                    props.setAdjustedValue(app);
                                    props.applicationToEdit(true)
                                }}>Edit</Button>
                            </Card>



                        </Card.Group>
                    </StyleFlex>

                    </StyleCard>
                )

            })}
        </div>
    )
}

export default Application;
