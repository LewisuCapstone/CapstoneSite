import React, { Component } from "react";
import EventDataService from "../services/event.service";
import { Link } from "react-router-dom";
import {NavLink, useNavigate} from 'react-router-dom';

export default class EventList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrieveTutorials = this.retrieveTutorials.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveTutorial = this.setActiveTutorial.bind(this);
    this.removeAllTutorials = this.removeAllTutorials.bind(this);
    this.searchTitle = this.searchTitle.bind(this);

    this.state = {
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1,
      searchTitle: ""
    };
  }

  componentDidMount() {
    this.retrieveTutorials();
  }

  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle
    });
  }

  retrieveTutorials() {
    EventDataService.getAll()
      .then(response => {
        this.setState({
          tutorials: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveTutorials();
    this.setState({
      currentTutorial: null,
      currentIndex: -1
    });
  }

  setActiveTutorial(tutorial, index) {
    this.setState({
      currentTutorial: tutorial,
      currentIndex: index
    });
  }

  removeAllTutorials() {
    EventDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchTitle() {
    this.setState({
      currentTutorial: null,
      currentIndex: -1
    });

    EventDataService.findByTitle(this.state.searchTitle)
      .then(response => {
        this.setState({
          tutorials: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { searchTitle, tutorials, currentTutorial, currentIndex } = this.state;

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
			Events
			</div>
	
	{/* top of page charity pic, note use a different one than the smaller tile pics*/}
		<div className="individualEventLogo"></div>
      <div className="list row">
	   <br/>
        <div className="col-md-8">
          <div className="input-group mb-3">
            <div className="w3-bar-card-4">
            <NavLink exact className="w3-bar-item w3-button w3-hover-black w3-text-white w3-hover-text-white w3-mobile"to = 'eventform'>Create Event</NavLink>
            
            </div>
			 <br/>
          </div>
        </div>
        <div className="col-md-12">
		{/*Formats the text for the title of the list*/}
          <div className="businessListTitle">Events List</div>
		 
        <ul className="list-group">
          {tutorials &&
          tutorials.map((tutorial, index) => (
            <div className="listWrapper">
              <li className={"list-group-item " + (index === currentIndex ? "active" : "")}
              onClick={() => this.setActiveTutorial(tutorial, index)} key={index}>
                <Link to={"/events/" + tutorial.id}>
                  <div className="charityTile">
                    {/*small charity pic next to info*/}
                    <div className="eventTilePic"/>
                    {/*changes formatting of charity name*/}
                    <div className="businessTileBName">
                      <b>{tutorial.eventName}</b>     {/* displayed on the list */}
                    </div>
                    {/*changes formatting of charity city/state/zip*/}
                    <div className="businessTileCityState">
                      {tutorial.city}, {tutorial.state} {tutorial.zipCode}
                    </div>
                    <br/>
                    {/*changes formatting of charity description*/}
                    <div className="businessTileShortDesc">
                      {tutorial.description}
                    </div>
                  </div>
                </Link>
              </li>
            </div>
          ))}
          </ul>

          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllTutorials}>
            Remove All
          </button>
        </div>
        {/*
        <div className="col-md-6">
          {currentTutorial ? (
            <div>
              <h4>Selected Charity</h4>
              <div>
                <label>
                  <strong>Charity Name:</strong>
                </label>{" "}
                {currentTutorial.charityName}
              </div>
              <div>
                <label>
                  <strong>City:</strong>
                </label>{" "}
                {currentTutorial.city}
              </div>
              <div>
                <label>
                  <strong>State:</strong>
                </label>{" "}
                {currentTutorial.state}
              </div>
              <div>
                <label>
                  <strong>Zip Code:</strong>
                </label>{" "}
                {currentTutorial.zipCode}
              </div>
              <div>
                <label>
                  <strong>Description:</strong>
                </label>{" "}
                {currentTutorial.description}
              </div>
              
			  
              

              <Link
                to={"/tutorials/" + currentTutorial.id}
                className="badge badge-warning"
              >
                Edit
              </Link>
            </div>
          </div>
          */}
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
	 <br></br><br></br>
	  
	  </div>
    );
  }
}
