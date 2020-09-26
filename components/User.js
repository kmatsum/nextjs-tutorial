// Standard Imports
import React from 'react';

// Functional Component ====================
const user = (props) => {

    // Return JSX ----------
    return (
        <div>
            <h1>{props.name}</h1>
            <p>Age: {props.age}</p>
        </div>
    );
}; export default user;