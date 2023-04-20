import React, { Component } from "react";
import BusinessUserDataService from "../services/businessuser.service";
import { withRouter } from '../common/with-router';

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
      <div>
        {currentBusinessUser ? (
          <div className="edit-form">
            <h4>BusinessUser</h4>
            <form>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={currentBusinessUser.title}
                  onChange={this.onChangeTitle}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={currentBusinessUser.description}
                  onChange={this.onChangeDescription}
                />
              </div>

              <div className="form-group">
                <label>
                  <strong>Status:</strong>
                </label>
                {currentBusinessUser.published ? "Published" : "Pending"}
              </div>
            </form>

            {currentBusinessUser.published ? (
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
              onClick={this.deleteBusinessUser}
            >
              Delete
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateBusinessUser}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a BusinessUser...</p>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(BusinessUser);