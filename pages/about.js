import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/Basepage';


class About extends React.Component {
    render() {
        return (
            <BaseLayout {...this.props.auth}>
                <BasePage title="This is About page " >                
                </BasePage>            
            </BaseLayout>
            
        )
    }
}

export default About;