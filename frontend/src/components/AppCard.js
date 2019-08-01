import React from 'react';
import { Link } from 'react-router-dom';

const AppCard = (props) => {
    const { person } = props;
    console.log(person);
    return (
        <div>
            {/* <div>{person.id}</div> */}
            <div>{person.email}</div>
            <div>{person.password}</div>
            <div>{person.application}</div>
            <Link to={`/home/${person.id}`}>App</Link>
        </div>
    );
};

export default AppCard;