import { Link } from 'react-router-dom'
import {NavLink, useNavigate} from 'react-router-dom';
export function BusinessPartners() {
  return (
    <div>
	
	<div className="header">
	{/*
        <h1>Community Charities</h1>
	
        <i> - Bringing Together Local Charities, Local Businesses, and Local Community - </i>
	Important note, redo this page like the charities page
      </div>
	
	  
	*/}
	  <div className="w3-bar w3-card-4 w3-teal">
	
          <NavLink exact className="w3-bar-item w3-button w3-hover-black w3-text-white w3-hover-text-white w3-mobile"to = '/about'>About</NavLink>
	
          <NavLink exact className="w3-bar-item w3-button w3-hover-black w3-text-white w3-hover-text-white w3-mobile"to = '/charitypartners'>Charity Partners</NavLink>
	{/* Banner */}
          <NavLink exact className="w3-bar-item w3-button w3-hover-black w3-text-white w3-hover-text-white w3-mobile"to = '/businesspartners'>Business Partners</NavLink>
	<div className="header">
          <NavLink exact className="w3-bar-item w3-button w3-hover-black w3-text-white w3-hover-text-white w3-mobile"to = '/charityevents'>Charity Events</NavLink>
        <h1>Community Charities</h1>
		  <NavLink exact className="w3-bar-item w3-button w3-hover-black w3-text-white w3-hover-text-white w3-mobile"to = '/loginpage'>Log-In</NavLink>
        <i> - Bringing Together Local Charities, Local Businesses, and Local Community - </i>
		  <NavLink exact className="w3-bar-item w3-button w3-hover-black w3-text-white w3-hover-text-white w3-mobile"to = '/'>Home</NavLink>
      </div>
        </div>
	  
	
	   { /* Nav bar and links */}
	<div className="bodyWrapper">
	  <div className="w3-bar w3-card-4 w3-teal">
			<div className="topOfPage">
          <NavLink exact className="w3-bar-item w3-button w3-hover-black w3-text-white w3-hover-text-white w3-mobile"to = '/about'>About</NavLink>
			Business Partners
          <NavLink exact className="w3-bar-item w3-button w3-hover-black w3-text-white w3-hover-text-white w3-mobile"to = '/charitypartners'>Charity Partners</NavLink>
			</div>
          <NavLink exact className="w3-bar-item w3-button w3-hover-black w3-text-white w3-hover-text-white w3-mobile"to = '/businesspartners'>Business Partners</NavLink>
			
          <NavLink exact className="w3-bar-item w3-button w3-hover-black w3-text-white w3-hover-text-white w3-mobile"to = '/charityevents'>Charity Events</NavLink>
			<div className="businessLogo">
		  <NavLink exact className="w3-bar-item w3-button w3-hover-black w3-text-white w3-hover-text-white w3-mobile"to = '/loginpage'>Log-In</NavLink>
			</div>
		  <NavLink exact className="w3-bar-item w3-button w3-hover-black w3-text-white w3-hover-text-white w3-mobile"to = '/'>Home</NavLink>
			
        </div>
			<div className="businessText">
	
			<br></br>
	{/* centers content on screen, surrounding it with two light blue squares */}
			
	<div className="bodyWrapper">
			<div className="businessTile">
	{/*Title of page*/}
			<div className="aboutUsDefault"></div>
			<div className="topOfPage">
			Businessname1
			Business Partners
			<br></br> city1, state1
			</div>
			<br></br> shortdisc1
			
			<br></br>
			{/* top of page business pic, note use different ones than tile pics */}
			<br></br>
			<div className="businessLogo">
			
			</div>
			</div>
			
			
			{/*was supposed to format text in body now it just puts a separation 
			<div className="businessTile">
			between the pic and the tiles*/}
			<div className="aboutUsDefault"></div>
			<div className="businessText">
			Businessname2
			<br></br>
			<br></br> city2, state2
			
			<br></br> shortdisc2
			{/*tile for each business*/}
			<br></br>
			<div className="businessTile">
			<br></br>
			{/*pic for each business*/}
			</div>
			<div className="aboutUsDefault"></div>
			
			Businessname1
			<div className="businessTile">
			<br></br> city1, state1
			<div className="aboutUsDefault"></div>
			<br></br> shortdisc1
			Businessname3
			<br></br>
			<br></br> city3, state3
			<br></br>
			<br></br> shortdisc3
			
			<br></br>
			</div>
			<br></br>
			
			</div>
			{/*tile for each business*/}
			
			<div className="businessTile">
			
			{/*pic for each business*/}
			</div>
			<div className="aboutUsDefault"></div>
				
			Businessname2
		<div className="bottomOfPage">
			<br></br> city2, state2
		<p><i>Copyright &copy; 2023 Community Charities<br></br>
			<br></br> shortdisc2
		<a href="CommunityCharities@CommunityCharities.com">CommunityCharities@CommunityCharities.com</a>
			<br></br>
		<br></br>This document was last modified on:
			<br></br>
		<script>
			</div>
		document.write(document.lastModified);
			
		</script></i>
			{/*tile for each business*/}
		</p>
			<div className="businessTile">
	  </div>
			{/*pic for each business*/}
		
			<div className="aboutUsDefault"></div>
	  </div>
			Businessname3
	  <br></br>
			<br></br> city3, state3
	  <br></br>
			<br></br> shortdisc3
    </div>
			<br></br>
  );
			<br></br>
}			</div>
			
			
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