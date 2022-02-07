import React, {useEffect} from 'react';

import { useRecoilState } from 'recoil';
import { userTokensState, ordersState } from './state';
import { httpGet } from './apiClient';

import { Routes, Route } from "react-router-dom";
import WebSocketInstance from './socket';
import MainPage from './pages/MainPage';

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
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
}

export default App;
