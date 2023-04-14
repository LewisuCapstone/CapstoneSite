import { Link } from 'react-router-dom'
import {NavLink, useNavigate} from 'react-router-dom';

export function About() {
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
			About Us
			</div>
			
			{/* about us top of page pic */}
			<div className="aboutUsLogo">
			</div>
			
			{/* formats text for mission statement */}
			<div className="aboutText">
			Mission Statement
			<br></br><br></br>
			This is our mission statement and it goes here.
			<br></br>
			This is our mission statement and it goes here.
			<br></br>
			This is our mission statement and it goes here.
			<br></br>
			This is our mission statement and it goes here.
			<br></br><br></br>
			
			</div>
			
			{/* container for our pics and bios */}
			<div className="aboutBios">
			{/* formats for the top column people */}
			<div className="aboutUsTopCol">
			{/* using default pic currently
             eventually replace each one of these with our actual pics*/}
			<div className="aboutUsDefault"></div>
			<p>
			*Name1
			<br></br>
			*Bio
			</p>
			</div>
			
			{/* formats for the top column people */}
			<div className="aboutUsTopCol">
			{/* using default pic currently
             eventually replace each one of these with our actual pics*/}
			<div className="aboutUsDefault">
			</div>
			<p>
			*Name2 
			<br></br>
			*Bio
			</p>
			</div>
			
		{/* formats for the top column people */}
			<div className="aboutUsTopCol">
			{/* using default pic currently
             eventually replace each one of these with our actual pics*/}
			<div className="aboutUsDefault"></div>
			<p>
			*Name3 
			<br></br>
			*Bio
			</p>
			</div>
			
			
			{/* formats for the bottom column people */}
			<div className="aboutUsBotCol">
			{/* using default pic currently
             eventually replace each one of these with our actual pics*/}
			<div className="aboutUsDefault"></div>
			<p>
			*Name4 
			<br></br>
			*Bio
			</p>
			</div>
			
			{/* formats for the bottom column people */}
			<div className="aboutUsBotCol">
			{/* using default pic currently
             eventually replace each one of these with our actual pics*/}
			<div className="aboutUsDefault"></div>
			<p>
			*Name5 
			<br></br>
			*Bio
			</p>
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
		
	  </div>
	  {/* adds gray bar on bottom of page*/}
	  <br></br>
	  <br></br>
	  
    </div>
  );
}