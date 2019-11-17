import React from 'react';
import ReactDOM from 'react-dom';

const Modoal = props => {
    return ReactDOM.createPortal(
        <div className="ui dimmer modals visible active">
            <div className="ui standard modal visible active">
                dfdjdsj dsçfdççd
            </div>
        </div>,
        document.querySelector('#modal')
    );
};

export default Modoal;