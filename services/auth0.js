import auth0 from 'auth0-js';

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
        this.handleAuthentication = this.handleAuthentication.bind(this);
    
}

    handleAuthentication() {
        debugger;
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
    }

    login() {
        this.auth0.authorize();
    }
}

const auth0Client = new Auth();
export default auth0Client;