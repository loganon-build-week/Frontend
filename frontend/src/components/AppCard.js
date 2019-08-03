import React from 'react';
import { Link } from 'react-router-dom';
import '../AppCard.css';

const AppCard = (props) => {
    const { person } = props;
    console.log(person);
    return (
        <div className="cardStyle">
            <div className="cardStyleDiv">{person.application}</div>
            <div className="cardStyleDiv">{person.email}</div>
            <div className="cardStyleDiv">{person.password}</div>
            <Link to={`/home/${person.id}`} className="cardStyleDivApp">App</Link>
        </div>
    );
};

export default AppCard;