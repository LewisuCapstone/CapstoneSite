import { Link } from 'react-router-dom'
import {NavLink, useNavigate} from 'react-router-dom';

export function About() {
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
			About Us
			</div>
			
			<div className="aboutUsLogo">
			</div>
			
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
			
			<div className="aboutBios">
			<div className="aboutUsTopCol">
			<div className="aboutUsDefault"></div>
			<p>
			*Name1
			<br></br>
			*Bio
			</p>
			</div>
			
			<div className="aboutUsTopCol">
			<div className="aboutUsDefault">
			</div>
			<p>
			*Name2 
			<br></br>
			*Bio
			</p>
			</div>
			
		
			<div className="aboutUsTopCol">
			<div className="aboutUsDefault"></div>
			<p>
			*Name3 
			<br></br>
			*Bio
			</p>
			</div>
			
			
			
			<div className="aboutUsBotCol">
			<div className="aboutUsDefault"></div>
			<p>
			*Name4 
			<br></br>
			*Bio
			</p>
			</div>
			
			<div className="aboutUsBotCol">
			<div className="aboutUsDefault"></div>
			<p>
			*Name5 
			<br></br>
			*Bio
			</p>
			</div>
			
		
			
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