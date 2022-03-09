import React, { Component } from "react";

class Personal extends Component {
  render() {
    const { personal, changePersonal } = this.props;

    return (
      <section className="personal-info">
        <h2>Personal Information</h2>

        <div className="input-field">
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            className="text-input"
            value={personal.firstName}
            onChange={changePersonal}
          />
        </div>
        <div className="input-field">
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            className="text-input"
            value={personal.lastName}
            onChange={changePersonal}
          />
        </div>
        <div className="input-field">
          <input
            type="text"
            name="jobTitle"
            placeholder="Job title"
            className="text-input"
            value={personal.jobTitle}
            onChange={changePersonal}
          />
        </div>
        <div className="input-field">
          <input
            type="text"
            name="phoneNum"
            placeholder="Phone #"
            className="text-input"
            value={personal.phoneNum}
            onChange={changePersonal}
          />
        </div>
        <div className="input-field">
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="text-input"
            value={personal.email}
            onChange={changePersonal}
          />
        </div>
        <div className="input-field">
          <input
            type="text"
            name="address"
            placeholder="Address"
            className="text-input"
            value={personal.address}
            onChange={changePersonal}
          />
        </div>
        <div className="input-field">
          <textarea
            name="description"
            placeholder="Describe yourself"
            className="text-input"
            value={personal.description}
            onChange={changePersonal}
          />
        </div>
      </section>
    );
  }
}

export default Personal;
