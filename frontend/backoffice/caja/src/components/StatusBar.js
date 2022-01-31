import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import './css/StatusBar.css'
import StatusBox from './StatusBox'

function StatusBar({ordersStatusPaid, ordersStatusAwait, ordersStatusCancel, ordersStatusInside}) {
  return (
    <div className="container">
      <StatusBox icon={faClock} quantity={ordersStatusAwait} status={"Para Retirar"}></StatusBox>
      <StatusBox icon={faShoppingBag} quantity={ordersStatusInside} status={"Retirando"}></StatusBox>
      <StatusBox icon={faThumbsUp} quantity={ordersStatusPaid} status={"Entregados"}></StatusBox>
      <StatusBox icon={faThumbsDown} quantity={ordersStatusCancel} status={"Cancelados"}></StatusBox>
    </div>
  );
}

export default StatusBar;
