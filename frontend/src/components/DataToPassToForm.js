import React, {useState} from 'react';
import Form from './Form.js';
import Application from "./ListOfApps.js";


const DataToPass = () =>{
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
        <div>
            <Form list={list} setList={setList} application={application} applicationToEdit={applicationToEdit} adjustedValue={adjustedValue} setAdjustedValue={setAdjustedValue} editApplication={editApplication}/>

            <h2>Saved List of Applications: </h2>

            <Application props={list} setAdjustedValue={setAdjustedValue} applicationToEdit={applicationToEdit} />

        </div>
    );
}

export default DataToPass;