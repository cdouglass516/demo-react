import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './components/home';
import MortgageClaims from './components/mortgageClaims/mortgageClaims';
import TrustyTracking from './components/trustyTracking/trustytracking';
import LoanMaintenance from './components/loanMaintenance/loanMaintenance';
import ClaimAgents from './components/claimAgents';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="loanMaintenance" element={<LoanMaintenance />} />
      <Route path="trustyTracker" element={<TrustyTracking />} />
      <Route path="mortgageClaims" element={<MortgageClaims />} />
      <Route path="claimagents" element={<ClaimAgents />} />
    </Routes>
  </BrowserRouter>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
