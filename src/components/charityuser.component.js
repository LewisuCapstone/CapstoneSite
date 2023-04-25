import React, { Component } from "react";
import CharityUserDataService from "../services/charityuser.service";
import { withRouter } from '../common/with-router';
import { Link } from 'react-router-dom'
import {NavLink, useNavigate} from 'react-router-dom';

class CharityUser extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.getCharityUser = this.getCharityUser.bind(this);
    this.updatePublished = this.updatePublished.bind(this);
    this.updateCharityUser = this.updateCharityUser.bind(this);
    this.deleteCharityUser = this.deleteCharityUser.bind(this);

    this.state = {
      currentCharityUser: {
        id: null,
        title: "",
        description: "",
        published: false
      },
      message: ""
    };
  }

  componentDidMount() {
    this.getCharityUser(this.props.router.params.id);
  }

  onChangeTitle(e) {
    const title = e.target.value;

    this.setState(function(prevState) {
      return {
        currentCharityUser: {
          ...prevState.currentCharityUser,
          title: title
        }
      };
    });
  }

  onChangeDescription(e) {
    const description = e.target.value;
    
    this.setState(prevState => ({
      currentCharityUser: {
        ...prevState.currentCharityUser,
        description: description
      }
    }));
  }

  getCharityUser(id) {
    CharityUserDataService.get(id)
      .then(response => {
        this.setState({
          currentCharityUser: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updatePublished(status) {
    var data = {
      id: this.state.currentCharityUser.id,
      title: this.state.currentCharityUser.title,
      description: this.state.currentCharityUser.description,
      published: status
    };

    CharityUserDataService.update(this.state.currentCharityUser.id, data)
      .then(response => {
        this.setState(prevState => ({
          currentCharityUser: {
            ...prevState.currentCharityUser,
            published: status
          }
        }));
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updateCharityUser() {
    CharityUserDataService.update(
      this.state.currentCharityUser.id,
      this.state.currentCharityUser
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "The charityuser was updated successfully!"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  deleteCharityUser() {    
    CharityUserDataService.delete(this.state.currentCharityUser.id)
      .then(response => {
        console.log(response.data);
        this.props.router.navigate('/charityusers');
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { currentCharityUser } = this.state;

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
            Charity Partner
          </div>
          
          {/* individual pic ontop left of page*/}
          <div className="individualPagePic">
          </div>
          
          {/*This needs to be reformmatted later:
          idea for future is to use different classes for different font sizes like i did on
          charity partners page*/}
          <div className="IndividualBody">
          <br/>

          {/*name of charity/business/user*/}
          <div className="individualName">
          {currentCharityUser.charityName}
          </div>
          
          {/*city and state*/}
          <div className="individualCityState">
          {currentCharityUser.city}, {currentCharityUser.state}
          </div>
          
          {/*zipcode*/}
          <div className="individualCityState">
          {currentCharityUser.zipCode}
          </div>
          
          <br/>
          <br/>
          
          {/*description of business/charity*/}
          <div className="individualShortDesc">
          {currentCharityUser.description}
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

export default withRouter(CharityUser);