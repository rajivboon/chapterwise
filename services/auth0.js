import auth0 from 'auth0-js';
import Cookies from 'js-cookie';
import axios from 'axios';

class Auth {
    
    
    constructor() {
       this.auth0 = new auth0.WebAuth({
        domain: 'quickmarriages.auth0.com',
        clientID: '0ijPBeMRqJHNBxvQoQ9BeI7tde5qLqnQ',
        redirectUri: 'http://localhost:3000/callback',
        responseType: 'token id_token',
        scope: 'openid profile'
       
    });
        
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.handleAuthentication = this.handleAuthentication.bind(this);
        this.isAuthenticated = this.isAuthenticated.bind(this);
    
}

    handleAuthentication() {
        
        return new Promise((resolve, reject) => {
            this.auth0.parseHash((err, authResult) => {
                if (authResult && authResult.accessToken && authResult.idToken) {
                    this.setSession(authResult);
                    resolve();
                } else if (err) {
                    reject(err)
                    // history.replace('/home');
                    console.log(err);
                    // alert(`Error: ${err.error}. Check the console for further details.`);
                }
            });
        })
    }

    setSession(authResult) {
       
     
        // Set the time that the Access Token will expire at
        const expiresAt = (authResult.expiresIn * 1000) + new Date().getTime();
        // this.accessToken = authResult.accessToken;
        // this.idToken = authResult.idToken;
        // this.expiresAt = expiresAt;
           
       
        Cookies.set('user', authResult.idTokenPayload);
        Cookies.set('jwt', authResult.idToken);
        Cookies.set('expiresAt', expiresAt);
    }

    logout(){
            Cookies.remove('user');
            Cookies.remove('jwt');
            Cookies.remove('expiresAt');
            this.auth0.logout({
              returnTo:'',
              clientID:'0ijPBeMRqJHNBxvQoQ9BeI7tde5qLqnQ'
            })
    }
    
    isAuthenticated() {
        // Check whether the current time is past the
        // access token's expiry time
        const expiresAt = Cookies.getJSON('expiresAt');
        // console.log(new Date().getTime() < expiresAt);   this help to know is executed in serer and the client
        return new Date().getTime() < expiresAt;
    }

    login() {
        this.auth0.authorize();
    }

    clientAuth() {
        
        return this.isAuthenticated();
    }

    serverAuth(req) {
        if (req.headers.cookie) {
    //         // const cookies = req.headers.cookie;
    //          const expirestAtCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('expiresAt='));
    //    if (!expirestAtCookie) { return undefined };
    //         const expiresAt = expirestAtCookie.split('=')[1];


             const cookies = req.headers.cookie;
            console.log(cookies, 'cookies');
            const splitedCookies = cookies.split(';');
            console.log(splitedCookies, 'splited');
            const expiresAtCookie = splitedCookies.find(c => c.trim().startsWith('expiresAt='));
            console.log(expiresAtCookie, 'expireat');
            if (!expiresAtCookie) { return console.log(expiresAtCookie, 'expireat in if'); };
            const expiresAtArray = expiresAtCookie.split('=');
            console.log(expiresAtArray, 'exparray');
            const expiresAt = expiresAtArray[1];
            console.log(expiresAt, 'expAt');
            return new Date().getTime() < expiresAt;

        }
    }

}

const auth0Client = new Auth();
export default auth0Client;