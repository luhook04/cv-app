import React, { Component } from "react";

class Personal extends Component {
  render() {
    const { personal, changePersonal } = this.props;

    return (
      <section className="personal-info">
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
        <div>
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            className="text-input"
            value={personal.lastName}
            onChange={changePersonal}
          />
        </div>
        <div>
          <input
            type="text"
            name="jobTitle"
            placeholder="Job title"
            className="text-input"
            value={personal.jobTitle}
            onChange={changePersonal}
          />
        </div>
        <div>
          <input
            type="text"
            name="address"
            placeholder="Address"
            className="text-input"
            value={personal.address}
            onChange={changePersonal}
          />
        </div>
        <div>
          <input
            type="text"
            name="phoneNum"
            placeholder="Phone #"
            className="text-input"
            value={personal.phoneNum}
            onChange={changePersonal}
          />
        </div>
        <div>
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="text-input"
            value={personal.email}
            onChange={changePersonal}
          />
        </div>
        <div>
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
