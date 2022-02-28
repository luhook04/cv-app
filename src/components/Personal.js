import React, { Component } from "react";

class Personal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="personal-info">
        <div className="input-field">
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            className="text-input"
          />
        </div>
        <div>
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            className="text-input"
          />
        </div>
        <div>
          <input
            type="text"
            name="jobTitle"
            placeholder="Job title"
            className="text-input"
          />
        </div>
        <div>
          <input
            type="text"
            name="address"
            placeholder="Address"
            className="text-input"
          />
        </div>
        <div>
          <input
            type="text"
            name="phoneNum"
            placeholder="Phone #"
            className="text-input"
          />
        </div>
        <div>
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="text-input"
          />
        </div>
        <div>
          <textarea
            name="description"
            placeholder="Describe yourself"
            className="text-input"
          />
        </div>
      </section>
    );
  }
}

export default Personal;
