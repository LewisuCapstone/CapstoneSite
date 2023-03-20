import React, { Component } from "react";
import CharityUserDataService from "../services/charityuser.service";

export default class AddTutorial extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.saveTutorial = this.saveTutorial.bind(this);
    this.newTutorial = this.newTutorial.bind(this);

    this.state = {
      id: null,
      charityName: "",
      email: "",
      password: "",
      city: "",
      state: "",
      zipCode: "",
      phone: "",
      description: "",

      submitted: false
    };
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  saveTutorial() {
    var data = {
      title: this.state.title,
      description: this.state.description,
      charityName: this.state.charityName,
      email: this.state.email,
      password: this.state.password,
      city: this.state.city,
      state: this.state.state,
      zipCode: this.state.zipCode,
      phone: this.state.phone,
      description: this.state.description,
      submitted: true
    };

    CharityUserDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          charityName: response.data.charityName,
          email: response.data.email,
          password: response.data.password,
          city: response.data.city,
          state: response.data.state,
          zipCode: response.data.zipCode,
          phone: response.data.phone,
          description: response.data.description,
          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newTutorial() {
    this.setState({
      id: null,

      title: "",
      description: "",
      published: false,

      submitted: false
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newTutorial}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={this.state.title}
                onChange={this.onChangeTitle}
                name="title"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={this.state.description}
                onChange={this.onChangeDescription}
                name="description"
              />
            </div>

            <button onClick={this.saveTutorial} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}
