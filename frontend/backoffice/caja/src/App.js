import React, {useEffect} from 'react';

import { useRecoilState } from 'recoil';
import { userTokensState, ordersState, listingIdState } from './state';
import { httpGet } from './apiClient';

import { Routes, Route, useSearchParams } from "react-router-dom";
import WebSocketInstance from './socket';
import MainPage from './pages/MainPage';

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
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
}

export default App;
