import React from 'react';


const AppCard = (props) => {
    const { person } = props;
    console.log(person);
    return (
        <div>
            <div>{person.id}</div>
            <div>{person.email}</div>
            <div>{person.password}</div>
            <div>{person.application}</div>
            {/* <Link to={`/edit/${person.id}`}>Edit</Link> */}
        </div>
    );
};

export default AppCard;