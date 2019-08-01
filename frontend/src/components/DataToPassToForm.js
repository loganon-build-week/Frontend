import React, {useState} from 'react';
import Form from './Form.js';
import Application from "./ListOfApps.js";
import styled from "styled-components";
import logo from "../images/LoganonLogoRoundLighter.png";
import { Route, Link } from "react-router-dom"; 


const DataToPass = () =>{

    let Div=styled.div`
    text-align: center;
    `
    const StyleImg = styled.img`
    margin: 2rem; 
    `

    const [list, setList] = useState([]);

    const [application, applicationToEdit] = useState(false);
    const [adjustedValue, setAdjustedValue] = useState({});
    
    function editApplication(information){
        const temporay = list.map( app =>{
            if (app === adjustedValue){
                return information
            }else{
                return app
            }
        })
        setList(temporay)
    }


    return(
        <Div>
             <Link to="/signup"><StyleImg src={logo} alt="loganon logo"></StyleImg></Link>
            <Form list={list} setList={setList} application={application} applicationToEdit={applicationToEdit} adjustedValue={adjustedValue} setAdjustedValue={setAdjustedValue} editApplication={editApplication}/>

            <h2>Saved List of Applications: </h2>

            <Application props={list} setAdjustedValue={setAdjustedValue} applicationToEdit={applicationToEdit} />

        </Div>
    );
}

export default DataToPass;