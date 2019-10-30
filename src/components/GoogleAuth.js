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
                this.auth.isSignIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = () => {
        this.setState({ isSignIn: this.auth.isSignIn.get() });
    }

    renderAuthButton () {
        if (this.state.isSignIn === null) {
            return null;
        } else if (this.state.isSignIn) {
            return (
                <button className="ui red google button">
                    <i className="google icon">Sign Out</i>
                </button>
            );
        } else {
            return (
                <button className="ui red google button">
                    <i className="google icon">Sign In with Google</i>
                </button>
            );
        }
    }

    render() {
        return <div>{this.renderAuthButton()}</div>;
    }
}

export default GoogleAuth;