import React, { useState } from "react";
import EventDataService from "./services/event.service";
import {NavLink, useNavigate} from 'react-router-dom';

import './styles.css';
import { withRouter } from './common/with-router';

export function CreateEventForm() {
  const [eventName, setEventName] = useState("");
  const [description, setEventDescription] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [eventDateTime, setEventDateTime] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");  

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      eventName,
      description,
      eventDateTime,
      address,
      city,
      state,
      zipCode,
    };
    console.log(formData);
	  EventDataService.create(formData);
  };

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
			Create Event Form
			</div>
			
			{/*pic for creating an event*/}
			<div className="individualEventLogo">
			</div>
			
			
    <form onSubmit={handleSubmit}>
	<div className="centerForm">
	{/*title of form*/}
	<div className="formTitle"><b>Please Fill Out The Form Below:</b></div>
	<br/>
	
	{/*centers the label text*/}
	<div className="centerFormText">
      <label htmlFor="eventName">Event Name:</label>
	  </div>
	  {/*centers the box next to text*/}
	  <div className="centerFormBoxes">
      <input
        type="text"
        id="eventName"
        value={eventName}
        onChange={(event) => setEventName(event.target.value)}
        required
      />
	  </div>
	  <br></br>

        {/*centers the label text*/}
		<div className="centerFormText">
      <label htmlFor="description">Event Description:</label>
	  </div>
	  {/*centers the box next to text*/}
	  <div className="centerFormBoxes">
      <textarea
        id="description"
        value={description}
        onChange={(event) => setEventDescription(event.target.value)}
        required
      ></textarea>
	  </div>
	  <br></br>

		{/*centers the label text*/}
		<div className="centerFormText">
      <label htmlFor="eventDate">Event Date:</label>
	  </div>
	  {/*centers the box next to text*/}
	  <div className="centerFormBoxes">
      <input
        type="date"
        id="eventDate"
        value={eventDate}
        onChange={(event) => [setEventDate(event.target.value), setEventDateTime(event.target.value + eventTime)]}
        required
      />
	  </div>
	  <br></br>

		{/*centers the label text*/}
		<div className="centerFormText">
      <label htmlFor="eventTime">Event Time:</label>
	  </div>
	  {/*centers the box next to text*/}
	  <div className="centerFormBoxes">
      <input
        type="time"
        id="eventTime"
        value={eventTime}
        onChange={(event) => [setEventTime(event.target.value), setEventDateTime(eventDate + event.target.value)]}
        required
      />
	  </div>
	  <br></br>

		{/*centers the label text*/}
	  <div className="centerFormText">
	    <label htmlFor="address">Address:</label>
		</div>
		{/*centers the box next to text*/}
	  <div className="centerFormBoxes">
      <input
        type="text"
        id="address"
        value={address}
        onChange={(event) => setAddress(event.target.value)}
        required
		/>
		 </div>
      <br></br>


		{/*centers the label text*/}
		<div className="centerFormText">
      <label htmlFor="city">City:</label>
	  </div>
	  {/*centers the box next to text*/}
	  <div className="centerFormBoxes">
      <input
        type="text"
        id="city"
        value={city}
        onChange={(event) => setCity(event.target.value)}
        required
      />
	  </div>
	  <br></br>

		{/*centers the label text*/}
		<div className="centerFormText">
      <label htmlFor="state">State:</label>
	  </div>
	  {/*centers the box next to text*/}
	  <div className="centerFormBoxes">
      <input
        type="text"
        id="state"
        value={state}
        onChange={(event) => setState(event.target.value)}
        required
      />
	   </div>
	   <br></br>

		{/*centers the label text*/}
		<div className="centerFormText">
      <label htmlFor="zipCode">Zip Code:</label>
	  </div>
	  {/*centers the box next to text*/}
	  <div className="centerFormBoxes">
      <input
        type="text"
        id="zipCode"
        value={zipCode}
        onChange={(event) => setZipCode(event.target.value)}
        required
      />
	  </div>
	  <br></br>

      <button type="submit">Create Event</button>
	  <br></br>
	  <br></br>
	  <br></br>
	  <br></br>
	  
	  </div> 
    </form>
	
	
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

export default CreateEventForm;