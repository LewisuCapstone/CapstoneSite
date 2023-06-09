import React from 'react';
import './styles.css';
import './w3.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import  {Homepage} from'./Homepage.js';
import  {About} from'./About.js';
import  {CharityEvents} from './CharityEvents.js';
import  {CharitySite} from './CharitySite.js';
import  {CharityForm} from './CharityForm.js';
import  {BusinessForm} from './BusinessForm.js';
import  {IndividualForm} from './IndividualForm.js';
import AddTutorial from "./components/add-tutorial.component";
import Tutorial from "./components/tutorial.component";
import TutorialsList from "./components/tutorials-list.component";
import CharityUserList from "./components/charityuser-list.component";
import CharityUser from "./components/charityuser.component";
import BusinessUserList from "./components/businessuser-list.component";
import BusinessUser from "./components/businessuser.component";
import CreateEventForm from "./Create_Event.js";
import Event from "./components/event.component";
import EventList from "./components/event-list.component";
import "bootstrap/dist/css/bootstrap.min.css";
import My404 from "./404.js";
import IndividualPage from "./IndividualPage.js";
import IndividualEvent from "./IndividualEvent.js";
import './styles.css';
import Login from "./LoginPage.js";
{/* disabled temporarily 
import UserAuthentication from "./User_Authentication.js";
*/}




function App() {
return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/charitypartners" element={<CharityUserList/>} />
          {/* disabled temporarily 
          <Route path="/charitypartners" element={<CharityPartners/>} />
          */}
          <Route path="/businesspartners" element={<BusinessUserList/>} />
         {/* disabled temporarily 
          <Route path="/charityevents" element={<CharityEvents/>} />
          */}
          <Route path="/charityevents" element={<EventList/>} />
          <Route path="/events/:id" element={<Event/>} />
          <Route path="/charitysite" element={<CharitySite/>} />
          <Route path="/businessform" element={<BusinessForm/>} />
          <Route path="/charityform" element={<CharityForm/>} />
          <Route path="/individualform" element={<IndividualForm/>} />
          <Route path="/tutorials" element={<TutorialsList/>} />
          <Route path="/tutorials" element={<TutorialsList/>} />
          <Route path="/add" element={<AddTutorial/>} />
          <Route path="/tutorials/:id" element={<Tutorial/>} />
          <Route path="/charitypartners/:id" element={<CharityUser/>} />
          <Route path="/businesspartners/:id" element={<BusinessUser/>} />
	  	    <Route path="/charitysite" element={<CharitySite/>} />
		      <Route path="/businessform" element={<BusinessForm/>} />
		      <Route path="/charityform" element={<CharityForm/>} />
		      <Route path="/individualform" element={<IndividualForm/>} />
		      <Route path="charityevents/eventform" element={<CreateEventForm/>} />
		      <Route path="/tutorials" element={<TutorialsList/>} />
          <Route path="/add" element={<AddTutorial/>} />
          <Route path="/tutorials/:id" element={<Tutorial/>} />
          {/* disabled temporarily 
		      <Route path="/userauth" element={<UserAuthentication/>} />
          */}
		      <Route path="/loginpage" element={<Login/>} />
          
		  <Route path="/IndividualPage" element={<IndividualPage/>} />
		  <Route path="/IndividualEvent" element={<IndividualEvent/>} />
		  <Route path='*' element={<My404/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;