import { Link } from 'react-router-dom'
import {NavLink, useNavigate} from 'react-router-dom';
export function IndividualPage(){
	return (
    <div>
	
	{/* Banner */}
      <div className="header">
        <h1>Community Charities</h1>
        <i> - Bringing Together Local Charities, Local Businesses, and Local Community - </i>
      </div>
	  
	  { /* Nav bar and links */}
        <div className="w3-bar w3-card-4 w3-teal">
          <NavLink exact className="w3-bar-item w3-button w3-hover-black w3-text-white w3-hover-text-white w3-mobile"to = '/about'>About</NavLink>
          <NavLink exact className="w3-bar-item w3-button w3-hover-black w3-text-white w3-hover-text-white w3-mobile"to = '/charitypartners'>Charity Partners</NavLink>
          <NavLink exact className="w3-bar-item w3-button w3-hover-black w3-text-white w3-hover-text-white w3-mobile"to = '/businesspartners'>Business Partners</NavLink>
          <NavLink exact className="w3-bar-item w3-button w3-hover-black w3-text-white w3-hover-text-white w3-mobile"to = '/charityevents'>Charity Events</NavLink>
		  <NavLink exact className="w3-bar-item w3-button w3-hover-black w3-text-white w3-hover-text-white w3-mobile"to = '/loginpage'>Log-In</NavLink>
		  <NavLink exact className="w3-bar-item w3-button w3-hover-black w3-text-white w3-hover-text-white w3-mobile"to = '/'>Home</NavLink>
        
		</div>
		
		{/* centers content on screen, surrounding it with two light blue squares */}
		<div className="bodyWrapper">
		{/*Title of page*/}
			<div className="topOfPage">
			Individual Page
			</div>
			
			{/* individual pic ontop left of page*/}
			<div className="IndividualPic">
			</div>
			
			{/*This needs to be reformmatted later:
			idea for future is to use different classes for different font sizes like i did on
			charity partners page*/}
			<div className="IndividualBody">
			<br/>
			<b>Name: </b>*Cname
			<br/>
			<br/>
			<b>City, State: </b>*Ccity, *Cstate
			<br/>
			<b>Zipcode: </b>*Czipcode
			<br/>
			<br/>
			<br/>
			<b>Description: </b>*Cdesc	
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
		    </div>
			
			{/* bottom of page copyright stuff */}	
		<div className="bottomOfPage">
		<p><i>Copyright &copy; 2023 Community Charities<br></br>
		<a href="CommunityCharities@CommunityCharities.com">CommunityCharities@CommunityCharities.com</a>
		<br></br>This document was last modified on:
		<script>
		document.write(document.lastModified);
		</script></i>
		</p>
	  </div>
		{/* adds gray bar on bottom of page*/}
	  </div>
	  <br></br>
	  <br></br>
    </div>
	
  );
	
	
}
export default IndividualPage;