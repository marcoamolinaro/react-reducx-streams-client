import React from 'react';

class GoogleAuth extends React.Component {
    componentDidMount () {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: 
                    '723575486398-6j8bc91aric4gjr4m08t6vqjqmg6usam.apps.googleusercontent.com',
                scope: 'email'
            });
        });
    }

    render() {
        return <div>Google Auth</div>;
    }
}

export default GoogleAuth;