import React from 'react';

import { Routes, Route, Navigate } from "react-router-dom";
import RealTimePage from '../pages/backoffice/RealTimePage';
import Login from '../pages/backoffice/Login';
import { useRecoilState } from 'recoil';
import { userTokensState } from '../state';
import { BrowserRouter } from "react-router-dom";

export const BackOfficeRuters = () => {
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
    <BrowserRouter>
      <Routes>
        <Route path="/api" element={whereNavigate()} />
        <Route path="/login" element={<Login />} />
        <Route path="/realtime" element={<RealTimePage />} />
      </Routes>
    </BrowserRouter>
  );
}

