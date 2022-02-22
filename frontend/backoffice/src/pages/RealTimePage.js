import React, {useEffect} from 'react';

import { useSearchParams } from "react-router-dom";
import { useRecoilState } from 'recoil';


import '../App.css'
import StatusBar from '../components/StatusBar'
import Table from '../components/Table'

import WebSocketInstance from '../socket';
import { httpGet } from '../apiClient';
import { userTokensState, ordersState, listingIdState } from '../state';


function RealTimePage() {
    const [queryParamas, _setQueryParams] = useSearchParams()
    const [listingId, setListingId] = useRecoilState(listingIdState)
    const [userTokens, _] = useRecoilState(userTokensState);
    const [_orders, setOrders] = useRecoilState(ordersState);
    
    useEffect(() => {
        setListingId(queryParamas.get("listingId"))
    }, [queryParamas])
  
  
    const getOrders = async () => {
      const res = await httpGet(`/listing/${listingId}/orders`, {}, {token: userTokens});
      setOrders(res.data);
    }

    const refresher = () => getOrders();
  
  
    useEffect(() => {
      WebSocketInstance.addCallbacks(refresher.bind());
      WebSocketInstance.connect();
      
      getOrders();
    }, [userTokens, listingId])

    return (
        <div className="app-container">
            <div className="listing-name"> 
                8va Compra de Verduras Agroecologicas 
            </div>
            <StatusBar></StatusBar>
            <Table></Table>
        </div>
    )
};

export default RealTimePage;