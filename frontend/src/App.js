import React from 'react';

import { Routes, Route } from "react-router-dom";
import RealTimePage from './pages/RealTimePage';
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/realtime" element={<RealTimePage />} />
    </Routes>
  );
}

export default App;
