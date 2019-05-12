import React from 'react';

class Index extends React.Component {
    render() {
    return ( 
        <div>
            <h1> This is Index page</h1>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/blogs">Blogs</a>
            <a href="/portfolios">Portfolios</a>
            <a href="/cv">Cv</a>
        </div>

        )
    }
}

export default Index;