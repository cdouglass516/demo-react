import React, { useEffect, useState } from "react";
import logo from '../../logo.svg';
import {  useNavigate } from 'react-router-dom';
export default function MortgageClaims(){
    const navigate = useNavigate();
    const goToPreviousPath = () => {
        navigate('/')
    }
    const [posts, setPosts] = useState([]);
    useEffect(() => {
      fetch('http://localhost/MortgageClaimsAPI//claims?id=0')
      .then(response => response.json())
          // 4. Setting *dogImage* to the image url that we received from the response above
      .then(data => setPosts(data))
    },[])
    return(
        <div>
        <img src={logo} className='App-logo'></img>
        <button
          onClick={goToPreviousPath}
        >
          Back
        </button>
        <div>
            <h3>Mortgage Claims</h3>
        </div>
        <div className="mortgageClaims--claimTbl">
            <table>
                <tr>
                    <th>Loan Number</th>
                    <th>Status</th>
                    <th>Event Type</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                </tr>
                {posts.map((claim) => (
                <tr>
                    <td>{claim.Loan.LoanNumber}</td>
                    <td>{claim.Status}</td>
                    <td>{claim.ClaimEventType}</td>
                    <td>{claim.Loan.FirstName}</td>
                    <td>{claim.Loan.LastName}</td>
                </tr>
                ))}
            </table>
        </div>
    </div>)
}