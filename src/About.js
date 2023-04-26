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
			
			{/* formats text for mission statement heading*/}
			<div className="aboutMSHeading">
			<b>Mission Statement<br/><br/></b>
			</div>
			{/* formats text for mission statement text*/}
			<div className="aboutMSText">
			The creation of Community Charities was motivated by the desire to make it easier for local charitable organizations, businesses, and individuals to come together and make a positive impact in their communities. We believe that by providing a centralized platform for charitable activities, we can help to remove some of the barriers that can prevent effective collaboration and resource sharing.
			<br/><br/>
			We were inspired by the many amazing charitable organizations and individuals seen doing incredible work in their communities but also saw the challenges they face in terms of resource management, volunteer coordination, and event promotion. We saw an opportunity to leverage technology to create a more efficient and effective way for these organizations and individuals to connect and work together towards common goals.
			<br/><br/>
			We also believe that by making it easier for individuals to donate to local causes, we can help to promote greater community engagement and philanthropy. By providing a marketplace for charitable donations, we hope to make it simple and easy for individuals to support causes they care about and see the impact of their contributions in real time.
			<br/><br/>
			Overall, our motivation for creating Community Charities is rooted in a deep belief in the power of community and the ability of individuals and organizations to come together to make a difference. We hope that our platform can play a meaningful role in helping to facilitate this kind of collaboration and support the incredible work being done by local charitable organizations, businesses, and individuals.
			<br/><br/>
			<br/><br/>
			</div>
			
			<div className="aboutContent">
			
			<div className="aboutDevsHeading">
			<b>Developers</b>
			<br/>
			<br/>
			</div>
			
			{/* using default pic currently
             eventually replace each one of these with our actual pics*/}
			<div className="aboutDevsTile">
			<div className="aboutUsMatthew"></div>
			<div className="aboutDevsName">
			<b>Matthew Martyka</b>
			</div>
			<div className="aboutDevsDesc">
			"I am a student at Lewis University studying Computer Science. 
			I have competed in national cybersecurity competitions, I am an Eagle Scout with many hours of community service, and I am also a member of Phi Theta Kappa"
			<br/><br/><br/><br/>
			</div>
			</div>
			
			{/* using default pic currently
             eventually replace each one of these with our actual pics*/}
			<div className="aboutDevsTile">
			<div className="aboutUsJohn"></div>
			<div className="aboutDevsName">
			<b>Johnathan Picek</b>
			</div>
			<div className="aboutDevsDesc">
			"Hello, my name is Johnathon and this is a placeholder bio for now until he makes one.
			Writing this helps makeing the CSS easier to format."
			<br/><br/><br/><br/><br/>
			</div>
			</div>
			
		   
			{/* using default pic currently
             eventually replace each one of these with our actual pics*/}
			<div className="aboutDevsTile">
			<div className="aboutUsKim"></div>
			<div className="aboutDevsName">
			<b>Kimberly Johnson</b>
			</div>
			<div className="aboutDevsDesc">
			"Hello, my name is Kim and this is a placeholder bio for now until she makes one.
			Writing this helps makeing the CSS easier to format."
			<br/><br/><br/><br/><br/>
			</div>
			</div>
			
			
			
			{/* using default pic currently
             eventually replace each one of these with our actual pics*/}
			<div className="aboutDevsTile">
			<div className="aboutUsValine"></div>
			<div className="aboutDevsName">
			<b>Valine Reginald Sanga Numeya</b>
			</div>
			<div className="aboutDevsDesc">
			"My friends call me Val. I am a student at Lewis University (3+1 Program from College of DuPage).
			 I like exploring various aspects of computers (from hardware to software). Technology to me is the way to solve many of the world's problems."
			<br/><br/><br/><br/>
			</div>
			</div>
			
			
			{/* using default pic currently
             eventually replace each one of these with our actual pics*/}
			 <div className="aboutDevsTile">
			<div className="aboutUsJoe"></div>
			<div className="aboutDevsName">
			<b>Joseph Eisman</b>
			</div>
			<div className="aboutDevsDesc">
			"I'm a Marine Corps veteran pursuing my Bachelor's Degree in Computer Science at Lewis University.
			Technology has the ability to bring great change to our communities."
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			</div>
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