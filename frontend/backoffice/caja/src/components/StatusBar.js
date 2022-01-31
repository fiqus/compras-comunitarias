import {React, useState} from 'react';

import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import './css/StatusBar.css'
import StatusBox from './StatusBox'

function StatusBar() {
  const defaultStatusQuantites = {
    pending: "0",
    withdrawing: "0",
    delivered: "0",
    cancelled: "0",
  }
  const [statusQuantities, setStatusQuantities] = useState(defaultStatusQuantites);

  return (
    <div className="container">
      <StatusBox icon={faClock} quantity={statusQuantities.pending} status={"Para Retirar"}></StatusBox>
      <StatusBox icon={faShoppingBag} quantity={statusQuantities.withdrawing} status={"Retirando"}></StatusBox>
      <StatusBox icon={faThumbsUp} quantity={statusQuantities.delivered} status={"Entregados"}></StatusBox>
      <StatusBox icon={faThumbsDown} quantity={statusQuantities.cancelled} status={"Cancelados"}></StatusBox>
    </div>
  );
}

export default StatusBar;
