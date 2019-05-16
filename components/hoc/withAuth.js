import React from 'react';
import BaseLayout from '../layouts/BaseLayout';
import BasePage from '../Basepage';


export default function (Component) {
    return class withAuth extends React.Component {

        renderProtectedPage() {
            const { isAuthenticated } = this.props.auth;
            if (isAuthenticated) {
                return (  <Component {...this.props} />                )

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
            
        
            return this.renderProtectedPage()
            }

    }
}