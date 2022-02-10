import React, {useEffect} from 'react';

import { useRecoilState } from 'recoil';
import { userTokensState, ordersState, listingIdState } from './state';
import { httpGet } from './apiClient';

import { Routes, Route, useSearchParams } from "react-router-dom";
import WebSocketInstance from './socket';
import RealTimePage from './pages/RealTimePage';
import Login from './pages/Login';

function App() {
  const [queryParamas, _setQueryParams] = useSearchParams()
  const [listingId, setListingId] = useRecoilState(listingIdState)

  useEffect(() => {
      setListingId(queryParamas.get("listingId"))
  }, [queryParamas])

  const [userTokens, _] = useRecoilState(userTokensState);
  const [_orders, setOrders] = useRecoilState(ordersState);

  const buildHeaders = () => {
    return {"Authorization": `Token ${userTokens.token}`}
  }

  const getOrders = async () => {
    const res = await httpGet(`/listing/${listingId}/orders`, {}, buildHeaders());
    setOrders(res.data);
  }

  const refresher = () => getOrders();

  useEffect(() => {
    WebSocketInstance.addCallbacks(refresher.bind());
    WebSocketInstance.connect();
    
    getOrders();
  }, [userTokens, listingId])


  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/realtime" element={<RealTimePage />} />
    </Routes>
  );
}

export default App;
