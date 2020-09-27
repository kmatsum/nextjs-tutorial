// Standard Imports
import React from 'react';

// Component Function =========================
const authIndexPage = (props) => {
    
    // Return JSX ----------
    return (
        <div>
            <h1>The Auth Index Page - {props.appName}</h1>
        </div>
    );
};

authIndexPage.getInitialProps = (context) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ appName: "Super App (Auth)" });
        }, 1000);
    });
    return promise;
};

export default authIndexPage;