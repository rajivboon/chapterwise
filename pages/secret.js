import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/Basepage';

import withAuth from '../components/hoc/withAuth';
import { getSecretData } from '../actions/index';

class Secret extends React.Component {

    static getInitialProps() {
        const superSecretValue = 'super secret value';
        return { superSecretValue };
    }

    // constructor(props) {
    //     super();

    //     this.state = {
    //         secretData: []
    //     }
    // }

    state = {
        secretData:[]
    }

    async componentDidMount() {
        const secretData = await getSecretData();
         
        this.setState({
            secretData
        });
    }

    displaySecretData() {
        const { secretData } = this.state;
        // debugger;
        
        if (secretData && secretData.length > 0) {
            return secretData.map((data, index) => {
                return (
                    <div key={index}>
                        <p> {data.title} </p>
                        <p> {data.description} </p>
                    </div>
                )
            })
        }
        return null;
    }

    render() {     
        const { superSecretValue } = this.props;
        // debugger;
        // console.log(this.state);
        return (
        <BaseLayout {...this.props.auth}>
            <BasePage>
                    <h1> This is Secret page</h1>
                    <h2>{superSecretValue} </h2>
                    {this.displaySecretData() }
                </BasePage>
            </BaseLayout>
        )
    }
}
            
export default withAuth(Secret);