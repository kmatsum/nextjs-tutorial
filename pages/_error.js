// Standard Imports
import React from 'react';
// Next Router Imports
import Link from 'next/link';

// Component Function =========================
const errorPage = (props) => {

    // Return JSX ----------
    return (
        <div>
            <h1>Something went wrong...</h1>
            <p>Try <Link href="/"><a>going back</a></Link></p>
        </div>
    );
}; export default errorPage;