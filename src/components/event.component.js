import React, { Component } from "react";
import EventDataService from "../services/event.service";
import { withRouter } from '../common/with-router';
import { Link } from 'react-router-dom'
import {NavLink, useNavigate} from 'react-router-dom';

class Event extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.getEvent = this.getEvent.bind(this);
    this.updatePublished = this.updatePublished.bind(this);
    this.updateEvent = this.updateEvent.bind(this);
    this.deleteEvent = this.deleteEvent.bind(this);

    this.state = {
      currentEvent: {
        id: null,
        title: "",
        description: "",
        published: false
      },
      message: ""
    };
  }

  componentDidMount() {
    this.getEvent(this.props.router.params.id);
  }

  onChangeTitle(e) {
    const title = e.target.value;

    this.setState(function(prevState) {
      return {
        currentEvent: {
          ...prevState.currentEvent,
          title: title
        }
      };
    });
  }

  onChangeDescription(e) {
    const description = e.target.value;
    
    this.setState(prevState => ({
      currentEvent: {
        ...prevState.currentEvent,
        description: description
      }
    }));
  }

  getEvent(id) {
    EventDataService.get(id)
      .then(response => {
        this.setState({
          currentEvent: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updatePublished(status) {
    var data = {
      id: this.state.currentEvent.id,
      title: this.state.currentEvent.title,
      description: this.state.currentEvent.description,
      published: status
    };

    EventDataService.update(this.state.currentEvent.id, data)
      .then(response => {
        this.setState(prevState => ({
          currentEvent: {
            ...prevState.currentEvent,
            published: status
          }
        }));
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updateEvent() {
    EventDataService.update(
      this.state.currentEvent.id,
      this.state.currentEvent
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "The event was updated successfully!"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  deleteEvent() {    
    EventDataService.delete(this.state.currentEvent.id)
      .then(response => {
        console.log(response.data);
        this.props.router.navigate('/events');
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { currentEvent } = this.state;

    return (
      <div id="parent">
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
            Event
          </div>
          
          {/* Page Logo*/}
          <div className="indivEventLogo">
          </div>
          
          {/*This needs to be reformmatted later:
          idea for future is to use different classes for different font sizes like i did on
          charity partners page*/}
          <div className="IndividualBody">
          <br/>

          {/*name of charity/business/user*/}
          <div className="individualName">
          {currentEvent.eventName}
          </div>
          
          {/*city and state*/}
          <div className="individualCityState">
          {currentEvent.address}<br />
          {currentEvent.city}, {currentEvent.state}
          </div>
          
          {/*zipcode*/}
          <div className="individualCityState">
          {currentEvent.zipCode}
          </div>
          
          <br/>
          <br/>
          
          {/*description of business/charity*/}
          <div className="individualShortDesc">
          {currentEvent.description}
          </div>

          {/*description of business/charity*/}
          <div className="individualShortDesc">
          {currentEvent.eventDateTime}
          </div>
          
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          
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
}

export default withRouter(Event);