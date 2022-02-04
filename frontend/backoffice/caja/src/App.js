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
  const [_orders, setOrders] = useRecoilState(ordersState);

  const buildHeaders = () => {
    return {"Authorization": `Token ${userTokens.token}`}
  }

  const getOrders = async () => {
    const res = await httpGet('/listing/1/orders', {}, buildHeaders());
    setOrders(res.data);
  }

  const refresher = () => getOrders();

  useEffect(() => {
    WebSocketInstance.addCallbacks(refresher.bind());
    WebSocketInstance.connect();
    
    getOrders();
  }, [userTokens])


  return (
    <div className="app-container">
      <div className="listing-name"> 8va Compra de Verduras Agroecologicas </div>
      <StatusBar></StatusBar>
      <Table></Table>
    </div>
  );
}

export default App;
