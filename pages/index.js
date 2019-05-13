import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import SuperComponet from '../components/SuperComponent';
import axios from 'axios';


class Index extends SuperComponet {

   

    constructor(props) {
        super(props);

        this.state = {
            titiel: 'i am index Page'
        }
        console.log('constructor');
    }

    componentDidMount() {
        console.log('componentDidMount');
                
    }

    ComponentDidUpdate() {
        console.log('shouldComponentUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    updateTitle() {
      
        this.setState({ titiel: 'i am updated' })
     
    }



    render() {
        
        const title = this.state.titiel;
        
    return ( 
        <BaseLayout>
            <h1> This is Index page</h1>
            <h2> {title}  </h2>            
            <button onClick={() => { this.updateTitle() }}>change titiel</button>
        </BaseLayout> 
            
        

        )
    }
}

export default Index;