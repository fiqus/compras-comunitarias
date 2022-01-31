import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import './css/StatusBar.css'
import StatusBox from './StatusBox'

function StatusBar() {
  return (
    <div className="container">
      <StatusBox icon={faClock} quantity={1} status={"Para Retirar"}></StatusBox>
      <StatusBox icon={faShoppingBag} quantity={1} status={"Retirando"}></StatusBox>
      <StatusBox icon={faThumbsUp} quantity={1} status={"Entregados"}></StatusBox>
      <StatusBox icon={faThumbsDown} quantity={1} status={"Cancelados"}></StatusBox>
    </div>
  );
}

export default StatusBar;
