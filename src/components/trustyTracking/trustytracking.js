import React from "react";
import logo from '../../logo.svg';
import './trustytracking.css';
import {  useNavigate } from 'react-router-dom';
export default function TrustyTracking(){
    const navigate = useNavigate();
    const goToPreviousPath = () => {
        navigate('/')
    }
    return(
    <div className="tt--container">
        <img src={logo} className='App-logo'></img>
        <nav>
            <h3>Trusty Tracking</h3>
        </nav>
        <button
          onClick={goToPreviousPath}
        >
          Back
        </button>
    </div>)
}