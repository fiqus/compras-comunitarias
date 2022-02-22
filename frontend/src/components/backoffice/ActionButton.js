import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './css/ActionButton.css'

function ActionButton({name, icon, action}) {
    return (
        <div className="button-container" onClick={action}>
            <div className="button-icon-container">
                <FontAwesomeIcon icon={icon} size="2x" />
            </div>
            <div className="button-name-container">
                {name}
            </div>
        </div>
    );
}

export default ActionButton;
