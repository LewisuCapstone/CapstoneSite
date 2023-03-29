import {NavLink, useNavigate} from 'react-router-dom';
//import SearchBar from './searchBar.js'

function myFunction() {
  document.getElementById("myBtn").disabled = true;
}




export function Homepage(){
	let navigate = useNavigate(); 
	
  const charityrouteChange = () =>{ 
    let path = `charityform`; 
    navigate(path);
  }
   const businessrouteChange = () =>{ 
    let path = `businessform`; 
    navigate(path);
  }
  
  const individualrouteChange = () =>{ 
    let path = `individualform`; 
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
		  <NavLink exact className="w3-bar-item w3-button w3-hover-black w3-text-white w3-hover-text-white w3-mobile"to = '/'>Home</NavLink>
        </div>
		
		<div className="bodyWrapper">
			<div className="topOfPage">
			Home
			</div>
			
			<div className="siteLogo">
			</div>
			
				<div className="column" style={{backgroundColor: "#85E0ED"}}>
				<h2>Local Charities Sign-up Here</h2>
				<button id="myBtn" onClick={charityrouteChange}>Create Account</button>
				</div>
				<div className="column" style={{backgroundColor: "#D6F8FD"}}>
				<h2>Local Businesses Sign-up Here</h2>
				<button id="myBtn" onClick={businessrouteChange}>Create Account</button>
				</div>
				<div className="column" style={{backgroundColor: "#ffff"}}>
				<h2>Individuals Sign-up Here</h2>
				<button id="myBtn" onClick={individualrouteChange}>Create Account</button>
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