import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faHouse
} from "@fortawesome/free-solid-svg-icons";

const PersonalHeading = ({ personal }) => {
  return (
    <div className="header-container">
      <div className="header-left">
        <h2 className="name">
          {personal.firstName.trim()} {personal.lastName.trim()}
        </h2>
        <h3 className="job-title">{personal.jobTitle.trim()}</h3>
      </div>
      <div className="header-right">
        <p>
          <FontAwesomeIcon icon={faPhone} />&nbsp;
          {personal.phoneNum.trim()}
        </p>
        <p>
          <FontAwesomeIcon icon={faEnvelope} />&nbsp;
          {personal.email.trim()}
        </p>
        <p>
          <FontAwesomeIcon icon={faHouse} />&nbsp;
          {personal.address.trim()}
        </p>
      </div>
    </div>
  );
};

export default PersonalHeading;
