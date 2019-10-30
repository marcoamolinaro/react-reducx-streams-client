import React from 'react';

class GoogleAuth extends React.Component {
    state = { isSignIn: null };

    componentDidMount () {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: 
                    '723575486398-6j8bc91aric4gjr4m08t6vqjqmg6usam.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({ isSignIn: this.auth.isSignIn.get()});

            });
        });
    }

    renderAuthButton () {
        if (this.state.isSignIn === null) {
            return <div>I dont know if you are signed in</div>
        } else if (this.state.isSignIn) {
            return <div>I am signed in</div>;
        } else {
            return <div>I am not signed in</div>;
        }
    }

    render() {
        return <div>{this.renderAuthButton()}</div>;
    }
}

export default GoogleAuth;