import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ShiftsPage } from './pages/ShiftsPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ShiftsPage />} />
        <Route path="/shifts" element={<ShiftsPage />} />
      </Routes>
    </div>
  );
}

export default App;