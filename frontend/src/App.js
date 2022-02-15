import React from 'react';

import { Routes, Route, Navigate } from "react-router-dom";
import RealTimePage from './pages/RealTimePage';
import Login from './pages/Login';
import { useRecoilState } from 'recoil';
import { userTokensState } from './state';

function App() {
  const [userToken, _setUserToken] = useRecoilState(userTokensState)

  const whereNavigate = () => {
    if (!userToken) {
      return <Navigate to="/login" /> 
    } else {
      // TODO: acá deberiamos tener logica que sepa dependiendo
      // que rol tenga (ADMIN o CONSUMIDOR) donde tiene que ir
      return <Navigate to="/realtime" /> 
    }
  }

  return (
    <Routes>
      <Route path="/" element={whereNavigate()} />
      <Route path="/login" element={<Login />} />
      <Route path="/realtime" element={<RealTimePage />} />
    </Routes>
  );
}

export default App;
