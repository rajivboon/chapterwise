import React from 'react';
import auth0 from '../services/auth0';
import App, { Container } from 'next/app';
// Styless
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.scss';

const namespace='http://localhost:3000'

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};

        const user = process.browser ? await auth0.clientAuth() : await auth0.serverAuth(ctx.req);

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        const isSiteOwner = user && user[namespace + '/role'] === 'siteOwner';

        const auth = { user, isAuthenticated: !!user, isSiteOwner };
       

        return { pageProps, auth };
    }

    render() {
        const { Component, pageProps, auth } = this.props;

        return (
            <Container>
                <Component {...pageProps} auth={auth} />
            </Container>
        );
    }
}

export default MyApp;