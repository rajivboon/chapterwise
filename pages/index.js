import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import SuperComponet from '../components/SuperComponent';


class Human {
    talk() {

        console.log('i am talking');
    }
    static walk() {
        console.log('i am walking')
    }
}
const human = new Human();
class Index extends SuperComponet {

    static getInitialProps() {
        console.log('i am getInitialProps');

        return {initialData: [1,2,3,4]};
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
        
        human.talk();
        Human.walk();
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
        debugger;
        const title = this.state.titiel;
        const initialData = this.props.initialData;
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