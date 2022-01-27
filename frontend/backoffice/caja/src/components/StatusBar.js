import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import { faWallet } from '@fortawesome/free-solid-svg-icons'
import './css/StatusBar.css'

function StatusBar() {
  return (
    <div className="container">
      <div className="statusContainer">
        <div className="icon">
          <FontAwesomeIcon icon={faClock} size="4x" />
        </div>
        <div className="detail">
          <div className="quantity">1</div>
          <div className="status">Para Retirar</div>
        </div>
      </div>
      <div className="statusContainer">
        <div className="icon">
          <FontAwesomeIcon icon={faShoppingBag} size="4x" />
        </div>
        <div className="detail">
          <div className="quantity">1</div>
          <div className="status">Retirando</div>
        </div>
      </div>
      <div className="statusContainer">
        <div className="icon">
          <FontAwesomeIcon icon={faThumbsUp} size="4x" />
        </div>
        <div className="detail">
          <div className="quantity">1</div>
          <div className="status">Entregados</div>
        </div>
      </div>
      <div className="statusContainer">
        <div className="icon">
          <FontAwesomeIcon icon={faThumbsDown} size="4x" />
        </div>
        <div className="detail">
          <div className="quantity">1</div>
          <div className="status">cancelados</div>
        </div>
      </div>
    </div>
  );
}

export default StatusBar;
