import React from 'react';
import Header from '../components/shared/Header';

class Index extends React.Component {
    render() {
    return ( 
        <div>
            <Header title={`I am a header Component`}> 
            <h1>I am a Header subtitle</h1>
          
            </Header>
            <h1> This is Index page</h1>
            
        </div>

        )
    }
}

export default Index;