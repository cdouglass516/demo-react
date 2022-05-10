import React, { useEffect, useState } from "react";
import logo from '../logo.svg';
import {  useNavigate } from 'react-router-dom';
export default function ClaimAgents(){
    const navigate = useNavigate();
    const goToPreviousPath = () => {
        navigate('/')
    }
    const [posts, setPosts] = useState([]);
    useEffect(() => {
      fetch('http://localhost/MortgageClaimsAPI/agents')
      .then(response => response.json())
          // 4. Setting *dogImage* to the image url that we received from the response above
      .then(data => setPosts(data))
    },[])
    return(
        <div>
        <img src={logo} className='App-logo'></img>
        <div>
            <h3>Claim Agents</h3>
        {posts.map((user) => (
          <div className="user" key={user.ClaimsAgentsId}>
              {user.Available == false && <span className="claimAgent--warning">Not Available</span>}
              <span>{user.AgentName}</span>
              <span>{user.Available.toString()}</span>
              <span>{user.LastAssigned}</span>
              </div>
        ))}
        </div>
        <button
          onClick={goToPreviousPath}
        >
          Back
        </button>
    </div>)
}