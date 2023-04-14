import { Link } from 'react-router-dom'
import {NavLink, useNavigate} from 'react-router-dom';

function myFunction() {
  document.getElementById("myBtn").disabled = true;
}


export function CharityEvents() {
	
	let navigate = useNavigate(); 
			
			const eventrouteChange = () =>{ 
			let path = `eventform`; 
			navigate(path);
			}
	
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
			Charity Events
			</div>
			
			<div className="charityLogo">
			</div>
			
			
			<div className="aboutText">
			<br></br>
			<button id="myBtn" onClick={eventrouteChange}>Create Event</button>
			
			<div className="eventTile">
			<div className="aboutUsDefault"></div>
			Eventname1
			<br></br> city1, state1
			<br></br> shortdisc1
			<br></br>
			<br></br>
			
			</div>
			
			<div className="eventTile">
			<div className="aboutUsDefault"></div>
			Eventname2
			<br></br> city2, state2
			<br></br> shortdisc2
			<br></br>
			<br></br>
			</div>
			
			<div className="eventTile">
			<div className="aboutUsDefault"></div>
			Eventname3
			<br></br> city3, state3
			<br></br> shortdisc3
			<br></br>
			<br></br>
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