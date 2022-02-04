import React, {useEffect} from 'react';

import { useRecoilState } from 'recoil';
import { userTokensState, ordersState } from './state';
import { httpGet } from './apiClient';

import StatusBar from './components/StatusBar'
import Table from './components/Table'
import './App.css'
import WebSocketInstance from './socket';

function App() {
  const [userTokens, _] = useRecoilState(userTokensState);
  const [orders, setOrders] = useRecoilState(ordersState);

  useEffect(() => {
    WebSocketInstance.connect()
    httpGet('/listing/1/orders', {}, {"Authorization": `Token ${userTokens.token}`})
      .then((res) => {
        setOrders(res.data)
      })
  }, [userTokens])


  return (
    <div className="app-container">
      <StatusBar></StatusBar>
      <Table></Table>
    </div>
  );
}

export default App;
