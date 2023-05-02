import React, { useState } from "react";
import {NavLink, useNavigate} from 'react-router-dom';
export function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      username: email, // email is used as the username
      password: password,
      
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
    Login Page
    </div>
    
    <div className="signinLogo">
    </div>
    
    <div className="businessFormText">
    <form onSubmit={handleSubmit}>
    <div className="centerForm">

    {/*form title*/}
    <div className="formTitle">
      <b>Please Login</b>
      <br/><br/>
    </div>

    {/*centers the label text*/}
    <div className="centerFormText">
      <label htmlFor="email">Email:</label>
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
    <br></br><br></br>


      <button type="submit">Sign In</button>
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
export default LoginPage;