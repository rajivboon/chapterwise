import React from 'react';
import Header from '../shared/Header';
import Head from 'next/head';


const BaseLayout = (props) => {
    const { className, children, isAuthenticated, user } = props;
    const headerType = props.headerType || "default";

    return (
        <React.Fragment>
            <Head>
                <title>Rajiv Boon</title>
                <script src="https://kit.fontawesome.com/30e36aa40b.js"></script>
            </Head>

        <div className="layout-container">
            {/* {headerType ==='index' &&  <Header className="port-nav-index" isAuthenticated={isAuthenticated} user={user} />}
            {headerType === 'default' && <Header className="port-nav-default" isAuthenticated={isAuthenticated} user={user} />} */}

            <Header className={`port-nav-${headerType}`} isAuthenticated={isAuthenticated} user={user} />

            <main className={`cover ${className}`}>
                <div className="wrapper">
                    {children}
                    </div>
            </main>
        </div>
        </React.Fragment>
            
    )
}
export default BaseLayout;