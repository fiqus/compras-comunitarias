import {React} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './css/StatusBar.css'

function StatusBox({icon, quantity, status}) {
  return (
    <div className="statusContainer">
        <div className="icon">
            <FontAwesomeIcon icon={icon} size="4x" />
        </div>
        <div className="detail">
            <div className="quantity">{quantity}</div>
            <div className="status">{status}</div>
        </div>
    </div>
  );
}

export default StatusBox;
