// Standard Imports
import React from 'react';
// Next Router Imports
import Link from 'next/link';
import Router from 'next/router';

// Component Function =========================
class IndexPage extends React.Component {

    static async getInitialProps(context) {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ appName: "Super App" });
            }, 1000);
        });
        return promise;
    }

    render() {
        // Return JSX ----------
        return (
            <div>
                <h1>The Main Page of {this.props.appName}</h1>
                <p>Go to <Link href="/auth"><a>Auth</a></Link></p>
                <button onClick={() => {
                    Router.push('/auth');
                }}>Go to Auth</button>
            </div>
        );
    }
}; export default IndexPage;