/* The code is similar to the CharityForm and BusinessForm, but with the 
field names changed to match the fields for creating an individual account, 
and with the email field being used as the username. */

import React, { useState } from "react";
import {NavLink, useNavigate} from 'react-router-dom';
export function IndividualForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      firstName: firstName,
      lastName: lastName,
      username: email, // email is used as the username
      password: password,
      city: city,
      state: state,
      zipCode: zipCode,
      phone: phone,
    };
    console.log(formData);
  };

  return (
  
  <div>
  
  <div className="header">
        <h1>Community Charities</h1>
        <i> - Bringing Together Local Charities, Local Businesses, and Local Community - </i>
      </div>
	  
	  <div className="w3-bar w3-card-4 w3-teal">
          <NavLink exact className="w3-bar-item w3-button w3-hover-black w3-text-white w3-hover-text-white w3-mobile"to = '/about'>About</NavLink>
          <NavLink exact className="w3-bar-item w3-button w3-hover-black w3-text-white w3-hover-text-white w3-mobile"to = '/charitypartners'>Charity Partners</NavLink>
          <NavLink exact className="w3-bar-item w3-button w3-hover-black w3-text-white w3-hover-text-white w3-mobile"to = '/businesspartners'>Business Partners</NavLink>
          <NavLink exact className="w3-bar-item w3-button w3-hover-black w3-text-white w3-hover-text-white w3-mobile"to = '/charityevents'>Charity Events</NavLink>
		  <NavLink exact className="w3-bar-item w3-button w3-hover-black w3-text-white w3-hover-text-white w3-mobile"to = '/loginpage'>Log-In</NavLink>
		  <NavLink exact className="w3-bar-item w3-button w3-hover-black w3-text-white w3-hover-text-white w3-mobile"to = '/'>Home</NavLink>

        </div>
	
	<div className="bodyWrapper">
			<div className="topOfPage">
			Individual Form
			</div>
			
			<div className="individualLogo">
			</div>
			
			<div className="businessFormText">
  
    <form onSubmit={handleSubmit}>
	<div className="centerForm">
      <label htmlFor="firstName">First Name:</label>
      <input
        type="text"
        id="firstName"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
        required
      /><br></br>

      <label htmlFor="lastName">Last Name:</label>
      <input
        type="text"
        id="lastName"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
        required
      /><br></br>

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      /><br></br>

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        required
      /><br></br>

      <label htmlFor="city">City:</label>
      <input
        type="text"
        id="city"
        value={city}
        onChange={(event) => setCity(event.target.value)}
        required
      /><br></br>

      <label htmlFor="state">State:</label>
      <input
        type="text"
        id="state"
        value={state}
        onChange={(event) => setState(event.target.value)}
        required
      /><br></br>

      <label htmlFor="zipCode">Zip Code:</label>
      <input
        type="text"
        id="zipCode"
        value={zipCode}
        onChange={(event) => setZipCode(event.target.value)}
        required
      /><br></br>

      <label htmlFor="phone">Phone:</label>
      <input
        type="text"
        id="phone"
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
        required
      /><br></br>

      <button type="submit">Create Account</button>
	  <br></br>
	  <br></br>
	  <br></br>
	  <br></br>
	  
	  </div>
    </form>
	</div>
	
	<div className="bottomOfPage">
		<p><i>Copyright &copy; 2023 Community Charities<br></br>
		<a href="CommunityCharities@CommunityCharities.com">CommunityCharities@CommunityCharities.com</a>
		<br></br>This document was last modified on:
		<script>
		document.write(document.lastModified);
		</script></i>
		</p>
	  </div>
		
	  </div>
	  <br></br>
	  <br></br>
    
	</div>
  );
}

export default IndividualForm;
