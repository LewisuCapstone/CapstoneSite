import React, { Component } from "react";
import CharityUserDataService from "../services/charityuser.service";
import { withRouter } from '../common/with-router';

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
      <div>
        {currentCharityUser ? (
          <div className="edit-form">
            <h4>CharityUser</h4>
            <form>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={currentCharityUser.title}
                  onChange={this.onChangeTitle}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={currentCharityUser.description}
                  onChange={this.onChangeDescription}
                />
              </div>

              <div className="form-group">
                <label>
                  <strong>Status:</strong>
                </label>
                {currentCharityUser.published ? "Published" : "Pending"}
              </div>
            </form>

            {currentCharityUser.published ? (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updatePublished(false)}
              >
                UnPublish
              </button>
            ) : (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updatePublished(true)}
              >
                Publish
              </button>
            )}

            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteCharityUser}
            >
              Delete
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateCharityUser}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a CharityUser...</p>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(CharityUser);