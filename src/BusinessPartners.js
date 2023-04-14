import { Link } from 'react-router-dom'
import {NavLink, useNavigate} from 'react-router-dom';
export function BusinessPartners() {
  return (
    <div>
	
	{/*
	
	Important note, redo this page like the charities page
	
	*/}
	
	
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
			Business Partners
			</div>
			
			{/* top of page business pic, note use different ones than tile pics */}
			<div className="businessLogo">
			</div>
			
			{/*was supposed to format text in body now it just puts a separation 
			between the pic and the tiles*/}
			<div className="businessText">
			<br></br>
			
			{/*tile for each business*/}
			<div className="businessTile">
			{/*pic for each business*/}
			<div className="aboutUsDefault"></div>
			Businessname1
			<br></br> city1, state1
			<br></br> shortdisc1
			<br></br>
			<br></br>
			
			</div>
			
			{/*tile for each business*/}
			<div className="businessTile">
			{/*pic for each business*/}
			<div className="aboutUsDefault"></div>
			Businessname2
			<br></br> city2, state2
			<br></br> shortdisc2
			<br></br>
			<br></br>
			</div>
			
			{/*tile for each business*/}
			<div className="businessTile">
			{/*pic for each business*/}
			<div className="aboutUsDefault"></div>
			Businessname3
			<br></br> city3, state3
			<br></br> shortdisc3
			<br></br>
			<br></br>
			</div>
			
			
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