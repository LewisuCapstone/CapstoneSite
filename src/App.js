import React from 'react';
import './styles.css';
import './w3.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import  {Homepage} from'./Homepage.js';
import  {About} from'./About.js';
import  {CharityPartners} from'./CharityPartners.js';
import  {BusinessPartners} from'./BusinessPartners.js';
import  {CharityEvents} from './CharityEvents.js';
import  {CharitySite} from './CharitySite.js';
import  {BusinessForm} from './BusinessForm.js';
import  {CharityForm} from './CharityForm.js';
import  {IndividualForm} from './IndividualForm.js';
import AddTutorial from "./components/add-tutorial.component";
import Tutorial from "./components/tutorial.component";
import TutorialsList from "./components/tutorials-list.component";
import "bootstrap/dist/css/bootstrap.min.css";






function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/charitypartners" element={<CharityPartners/>} />
          <Route path="/businesspartners" element={<BusinessPartners/>} />
          <Route path="/charityevents" element={<CharityEvents/>} />
		  <Route path="/charitysite" element={<CharitySite/>} />
		  <Route path="/businessform" element={<BusinessForm/>} />
		  <Route path="/charityform" element={<CharityForm/>} />
		  <Route path="/individualform" element={<IndividualForm/>} />
		  <Route path="/tutorials" element={<TutorialsList/>} />
        //  <Route path="/tutorials" element={<TutorialsList/>} />
          <Route path="/add" element={<AddTutorial/>} />
         <Route path="/tutorials/:id" element={<Tutorial/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;