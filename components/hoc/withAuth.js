import React from 'react';
import BaseLayout from '../layouts/BaseLayout';
import BasePage from '../Basepage';

const namespace = 'http://localhost:3000/';

export default role => (Component => (
       class withAuth extends React.Component {

            static async getInitialProps(args) {
                const pageProps = await Component.getInitialProps && await Component.getInitialProps(args);
                return { ...pageProps };
            }

            renderProtectedPage() {
                const { isAuthenticated, user } = this.props.auth;
                const userRole = user && user[`${namespace}role`];
                let isAuthorized = false;

                if (role) {
                    if (userRole && userRole === role) { isAuthorized = true };

                } else {
                    isAuthorized = true;
                }



                // console.log(role);
                // debugger;
                if (!isAuthenticated) {
                    return (
                        <BaseLayout {...this.props.auth}>
                            <BasePage>
                                <h1> you are not isAuthenticated. Please login to access this page</h1>
                            </BasePage>
                        </BaseLayout>
                    )

                } else if (!isAuthorized) {
                    return (
                        <BaseLayout {...this.props.auth}>
                            <BasePage>
                                <h1> you are not authorized. you dont have a permission to  visit this page</h1>
                            </BasePage>
                        </BaseLayout>
                    )
                } else {
                    return (<Component {...this.props} />)
                }
            }


            render() {


                return this.renderProtectedPage()
            }

        }
    )

)
    
   