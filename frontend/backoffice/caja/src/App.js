import React from 'react';
import { useRecoilState } from 'recoil';

import { userTokenState } from './state';

import StatusBar from './components/StatusBar'
import Table from './components/Table'
import './App.css'

function App() {
  const [userTokens, _] = useRecoilState(userTokenState);

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
