import React, {useState, useEffect} from 'react';
import useFetch from 'use-http';

import StatusBar from './components/StatusBar'
import Table from './components/Table'
import './App.css'

function App() {
  const [orders, setOrders] = useState([]);

  const { get, post, response, loading, error } = useFetch('http://localhost:8000/api')

  useEffect(() => { getOrders() }, [])
  
  async function getOrders() {
    const orders = await get('/listing/1/orders');
    if (response.ok) {
      setOrders(orders);
    }
  }

  return (
    <div className="app-container">
      <StatusBar></StatusBar>
      <Table orders={orders}></Table>
    </div>
  );
}

export default App;
