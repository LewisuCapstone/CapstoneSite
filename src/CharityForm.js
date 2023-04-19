import React, { useState } from "react";
import {NavLink, useNavigate} from 'react-router-dom';
import './styles.css';
import CharityUserDataService from "./services/charityuser.service";
import { withRouter } from './common/with-router';

/*This form includes the fields specified in Discord, with the email field as the username. 
It also includes basic validation for required fields. The handleSubmit function 
logs the form data to the console for demonstration purposes, but we can replace it 
with our own code to submit the data to our server or API. */

export function CharityForm() {
  const [charityName, setCharityName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      charityName,
      email,
      password,
      city,
      state,
      zipCode,
      phone,
      description
    };
    console.log(formData); // We can replace this with our own code to submit the form data to our server or API.
	CharityUserDataService.create(formData);
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
			Charity Form
			</div>
			
			<div className="charityLogo">
			</div>
			
			<div className="businessFormText">
	
    <form onSubmit={handleSubmit}>
	<div className="centerForm">
	<div className="formTitle"><b>Please Fill Out The Form Below:</b></div>
	<br/>
	
	{/*centers the label text*/}
	<div className="centerFormText">
      <label htmlFor="charityName">Charity Name:</label>
	  </div>
	  {/*centers the box next to text*/}
	  <div className="centerFormBoxes">
      <input
        type="text"
        id="charityName"
        value={charityName}
        onChange={(event) => setCharityName(event.target.value)}
        required
      />
	  </div>
	  <br></br>
	
	{/*centers the label text*/}
		<div className="centerFormText">
      <label htmlFor="email">Email (Username):</label>
	  </div>
	  {/*centers the box next to text*/}
	  <div className="centerFormBoxes">
      <input
        type="email"
        id="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />
	  </div>
	  <br></br>

	{/*centers the label text*/}
		<div className="centerFormText">
      <label htmlFor="password">Password:</label>
	  </div>
	  {/*centers the box next to text*/}
	  <div className="centerFormBoxes">
      <input
        type="password"
        id="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        required
      />
	  </div>
	  <br></br>

	{/*centers the label text*/}
		<div className="centerFormText">
      <label htmlFor="city">City:</label>
	  </div>
	  {/*centers the box next to text*/}
	  <div className="centerFormBoxes">
      <input
        type="text"
        id="city"
        value={city}
        onChange={(event) => setCity(event.target.value)}
        required
      />
	  </div>
	  <br></br>

		{/*centers the label text*/}
		<div className="centerFormText">
      <label htmlFor="state">State:</label>
      </div>
	  {/*centers the box next to text*/}
	  <div className="centerFormBoxes">
	  <input
        type="text"
        id="state"
        value={state}
        onChange={(event) => setState(event.target.value)}
        required
      />
	  </div>
	  <br></br>

		{/*centers the label text*/}
		<div className="centerFormText">
      <label htmlFor="zipCode">Zip Code:</label>
	  </div>
	 {/*centers the box next to text*/}
	  <div className="centerFormBoxes">
      <input
        type="text"
        id="zipCode"
        value={zipCode}
        onChange={(event) => setZipCode(event.target.value)}
        required
      />
	  </div>
	  <br></br>

		{/*centers the label text*/}
		<div className="centerFormText">
      <label htmlFor="phone">Phone:</label>
	  </div>
	  {/*centers the box next to text*/}
	  <div className="centerFormBoxes">
      <input
        type="text"
        id="phone"
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
        required
      />
	  </div>
	  <br></br>
	  
	  {/*centers the label text*/}
		<div className="centerFormText">
      <label htmlFor="description">Description:</label>
	  </div>
	  {/*centers the box next to text*/}
	  <div className="centerFormBoxes">
      <textarea
        id="description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        required
      />
	  </div>
	  <br></br>

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

export default CharityForm;