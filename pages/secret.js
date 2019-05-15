import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/Basepage';

class Secret extends React.Component {

    renderSecretPage() {
        const { isAuthenticated } = this.props.auth;
        if (isAuthenticated) {
            return (
                <BaseLayout {...this.props.auth}>
                <BasePage>
                    <h1> This is Secret page</h1>
                </BasePage>
            </BaseLayout>
                
            )

        } else {
            return (
                <BaseLayout {...this.props.auth}>
                    <BasePage>
                        <h1> Please log in</h1>
                    </BasePage>
                </BaseLayout>
            )

        }
    }
    
    render() {

       
        return this.renderSecretPage()
    }
}

export default Secret;