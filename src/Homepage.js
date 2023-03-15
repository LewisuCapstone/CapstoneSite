import {NavLink, useNavigate} from 'react-router-dom';
import SearchBar from './searchBar.js'

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

      <div className="w3-container">
        <div className="w3-bar w3-border w3-card-4 w3-teal">
          <NavLink exact className="w3-bar-item w3-button w3-hover-black w3-text-white w3-hover-text-white w3-mobile"to = '/about'>About</NavLink>
          <NavLink exact className="w3-bar-item w3-button w3-hover-black w3-text-white w3-hover-text-white w3-mobile"to = '/charitypartners'>Charity Partners</NavLink>
          <NavLink exact className="w3-bar-item w3-button w3-hover-black w3-text-white w3-hover-text-white w3-mobile"to = '/businesspartners'>Business Partners</NavLink>
          <NavLink exact className="w3-bar-item w3-button w3-hover-black w3-text-white w3-hover-text-white w3-mobile"to = '/charityevents'>Charity Events</NavLink>
		  <SearchBar/>
        </div>
      </div>

      <div className="row">
        <div className="column" style={{backgroundColor: "rgb(253, 120, 103)"}}>
          <h2>Local Charities Sign-up Here</h2>
          <p>Some text..</p>
          <button id="myBtn" onClick={charityrouteChange}>Create Account</button>
        </div>
        <div className="column" style={{backgroundColor: "rgb(248, 220, 220)"}}>
          <h2>Local Businesses Sign-up Here</h2>
          <p>hhhh</p>
          <button id="myBtn" onClick={businessrouteChange}>Create Account</button>
        </div>
        <div className="column" style={{backgroundColor: "#ffff"}}>
          <h2>Individuals Sign-up Here</h2>
          <p>Some text..</p>
          <button id="myBtn" onClick={individualrouteChange}>Create Account</button>
        </div>
      </div>
    </div>
  );
	
	
}