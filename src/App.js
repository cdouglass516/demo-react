import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './components/home';
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
function App() {
  return (
    <div>
      <img src={logo} className='App-logo'></img>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/loanMaintenance">Loan Maintenance</Link> |{" "}
        <Link to="/trustyTracker">Trusty Tracker</Link> |{" "}
        <Link to="/mortgageClaims">Mortgage Claims</Link> |{" "}
        <Link to="/claimAgents">Claim Agents</Link>
      </nav>
    </div>
  );
}

export default App;
