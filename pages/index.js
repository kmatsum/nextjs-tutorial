// Standard Imports
import React from 'react';
// Next Router Imports
import Link from 'next/link';
import Router from 'next/router';

// Component Function =========================
class IndexPage extends React.Component {
    render() {
        // Return JSX ----------
        return (
            <div>
                <h1>The Main Page</h1>
                <p>Go to <Link href="/auth"><a>Auth</a></Link></p>
                <button onClick={() => {
                    Router.push('/auth');
                }}>Go to Auth</button>
            </div>
        );
    }
}; export default IndexPage;