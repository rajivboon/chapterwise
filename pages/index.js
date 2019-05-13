import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import SuperComponet from '../components/SuperComponent';
import axios from 'axios';


class Index extends SuperComponet {

    static async getInitialProps() {
        let userData = {};
            
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
            userData =response.data;
        } catch (error) {
            console.error(error);
        }
        

        // axios.get("https://jsonplaceholder.typicode.com/todos/1")
        //     .then(
        //         (response) => console.log(response.data)
        //     )
        //     .catch(err => console.error(err))
        
        return { initialData: [1, 2, 3, 4], userData };
    }

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
        const { userData, initialData } = this.props;
        // const initialData = this.props.initialData;
    return ( 
        <BaseLayout>
            <h1> This is Index page</h1>
            <h2> {title}  </h2>
            <h2>{userData.title}</h2>
            <button onClick={() => { this.updateTitle() }}>change titiel</button>
        </BaseLayout> 
            
        

        )
    }
}

export default Index;