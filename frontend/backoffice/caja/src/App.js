import React, {useEffect} from 'react';

import { useRecoilState } from 'recoil';
import { userTokensState, ordersState } from './state';
import { httpGet } from './apiClient';

import StatusBar from './components/StatusBar'
import Table from './components/Table'
import './App.css'

function App() {
  const [userTokens, _] = useRecoilState(userTokensState);
  const [orders, setOrders] = useRecoilState(ordersState);

  useEffect(() => {
    console.log("holaa", userTokens)
    httpGet('/listing/1/orders', {}, {"Authorization": `Token ${userTokens.token}`})
      .then((orders) => {
        setOrders(orders)
      })
  }, [userTokens])



  return (
    <div className="app-container">
      <StatusBar 
        ordersStatusPaid={1} 
        ordersStatusAwait={1} 
        ordersStatusCancel={1} 
        ordersStatusInside={1}>
      </StatusBar>
      <Table orders={[]}></Table>
    </div>
  );
}

export default App;
