import React, {useState, useEffect} from 'react';
import useFetch from 'use-http';

import StatusBar from './components/StatusBar'
import Table from './components/Table'
import './App.css'

function App() {
  const [orders, setOrders] = useState([]);
  const [ordersStatusPaid, setOrdersStatusPaid] = useState(0);
  const [ordersStatusAwait, setOrdersStatusAwait] = useState(0);
  const [ordersStatusCancel, setOrdersStatusCancel] = useState(0);
  const [ordersStatusInside, setOrdersStatusInside] = useState(0);

  const { get, post, response, loading, error } = useFetch('http://localhost:8000/api')

  useEffect(() => { getOrders() }, [])
  
  async function getOrders() {
    const orders = await get('/listing/1/orders');
    if (response.ok) {
      setOrders(orders);
      setOrdersStatusPaid(orders.filter(order => order.status === "paid").length)
      setOrdersStatusAwait(orders.filter(order => order.status === "await").length)
      setOrdersStatusCancel(orders.filter(order => order.status === "cancel").length)
      setOrdersStatusInside(orders.filter(order => order.status === "inside").length)
    }
  }

  console.log(orders)

  return (
    <div className="app-container">
      <StatusBar 
        ordersStatusPaid={ordersStatusPaid} 
        ordersStatusAwait={ordersStatusAwait} 
        ordersStatusCancel={ordersStatusCancel} 
        ordersStatusInside={ordersStatusInside}>
      </StatusBar>
      <Table orders={orders}></Table>
    </div>
  );
}

export default App;
