import React from "react";
import logo from '../../logo.svg';
import './loanMaintenance.css'
import {  useNavigate } from 'react-router-dom';
export default function LoanMaintenance(){
    const navigate = useNavigate();
    const goToPreviousPath = () => {
        navigate('/')
    }
    return(
    <div className="loanMaintenance--container">
        <img src={logo} className='App-logo'></img>
        <nav>
            <h3>Loan Maintenance</h3>
        </nav>
        <button
          onClick={goToPreviousPath}
        >
          Back
        </button>
    </div>)
}