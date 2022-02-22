import { useRecoilState } from 'recoil';
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons'

import './css/StatusBar.css'
import StatusBox from './StatusBox'

import { ordersState } from '../../state';

function StatusBar() {
  const [orders, _] = useRecoilState(ordersState);
  const ordersStatusAwait = orders.filter((order) => order.status === "await").length;
  const ordersStatusInside = orders.filter((order) => order.status === "inside").length;  
  const ordersStatusPaid = orders.filter((order) => order.status === "paid").length;
  const ordersStatusCancel = orders.filter((order) => order.status === "cancel").length;  


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
