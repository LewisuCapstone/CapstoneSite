import React, { Component } from "react";
import BusinessUserDataService from "../services/businessuser.service";
import { withRouter } from '../common/with-router';
import { Link } from 'react-router-dom'
import {NavLink, useNavigate} from 'react-router-dom';

class BusinessUser extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.getBusinessUser = this.getBusinessUser.bind(this);
    this.updatePublished = this.updatePublished.bind(this);
    this.updateBusinessUser = this.updateBusinessUser.bind(this);
    this.deleteBusinessUser = this.deleteBusinessUser.bind(this);

    this.state = {
      currentBusinessUser: {
        id: null,
        title: "",
        description: "",
        published: false
      },
      message: ""
    };
  }

  componentDidMount() {
    this.getBusinessUser(this.props.router.params.id);
  }

  onChangeTitle(e) {
    const title = e.target.value;

    this.setState(function(prevState) {
      return {
        currentBusinessUser: {
          ...prevState.currentBusinessUser,
          title: title
        }
      };
    });
  }

  onChangeDescription(e) {
    const description = e.target.value;
    
    this.setState(prevState => ({
      currentBusinessUser: {
        ...prevState.currentBusinessUser,
        description: description
      }
    }));
  }

  getBusinessUser(id) {
    BusinessUserDataService.get(id)
      .then(response => {
        this.setState({
          currentBusinessUser: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updatePublished(status) {
    var data = {
      id: this.state.currentBusinessUser.id,
      title: this.state.currentBusinessUser.title,
      description: this.state.currentBusinessUser.description,
      published: status
    };

    BusinessUserDataService.update(this.state.currentBusinessUser.id, data)
      .then(response => {
        this.setState(prevState => ({
          currentBusinessUser: {
            ...prevState.currentBusinessUser,
            published: status
          }
        }));
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updateBusinessUser() {
    BusinessUserDataService.update(
      this.state.currentBusinessUser.id,
      this.state.currentBusinessUser
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "The businessUser was updated successfully!"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  deleteBusinessUser() {    
    BusinessUserDataService.delete(this.state.currentBusinessUser.id)
      .then(response => {
        console.log(response.data);
        this.props.router.navigate('/businessUsers');
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { currentBusinessUser } = this.state;

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
            Business Partner
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
          {currentBusinessUser.businessName}
          </div>
          
          {/*city and state*/}
          <div className="individualCityState">
          {currentBusinessUser.phone}<br />
          {currentBusinessUser.address}<br />
          {currentBusinessUser.city}, {currentBusinessUser.state}
          </div>
          
          {/*zipcode*/}
          <div className="individualCityState">
          {currentBusinessUser.zipCode}
          </div>
          
          <br/>
          <br/>
          
          {/*description of business/charity*/}
          <div className="individualShortDesc">
          {currentBusinessUser.description}
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

export default withRouter(BusinessUser);