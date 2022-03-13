import uniqid from "uniqid";
import React, { useState } from "react";
import Form from "./components/Form";
import { emptyCv } from "./components/EmptyObjs/EmptyObjs";
import Overview from "./components/Overview/Overview";
import "./App.css";

const App = () => {
  const [ cv, setCv ] = useState(emptyCv);

  const changePersonal = (e) => {
    const { name, value } = e.target;
    setCv((prevState) => ({
      ...prevState,
      personal : {
        ...prevState.personal,
        [name] : value
      }
    }));
  };

  const changeWork = (e, id) => {
    const { name, value } = e.target;
    setCv((prevState) => {
      const newWorkArray = prevState.workExperience.map((workItem) => {
        if (workItem.id === id) {
          return {
            ...workItem,
            [name] : value
          };
        }
        return workItem;
      });
      return { ...prevState, workExperience: [ ...newWorkArray ] };
    });
  };

  const changeEducation = (e, id) => {
    const { name, value } = e.target;
    setCv((prevState) => {
      const newEducationArray = prevState.education.map(
        (educationItem) => {
          if (educationItem.id === id) {
            return {
              ...educationItem,
              [name] : value
            };
          }
          return educationItem;
        }
      );
      return { ...prevState, education: [ ...newEducationArray ] };
    });
  };

  const addWork = () => {
    setCv((prevState) => ({
      ...prevState,
      workExperience : [
        ...prevState.workExperience,
        {
          position    : "",
          company     : "",
          startDate   : "",
          endDate     : "",
          description : "",
          id          : uniqid()
        }
      ]
    }));
  };

  const addEducation = () => {
    setCv((prevState) => ({
      ...prevState,
      education : [
        ...prevState.education,
        {
          school         : "",
          degree         : "",
          startDate      : "",
          graduationDate : "",
          id             : uniqid()
        }
      ]
    }));
  };

  const deleteWork = (id) => {
    setCv((prevState) => {
      const filteredWork = prevState.workExperience.filter(
        (workItem) => workItem.id !== id
      );
      return { ...prevState, workExperience: [ ...filteredWork ] };
    });
  };

  const deleteEducation = (id) => {
    setCv((prevState) => {
      const filteredEdu = prevState.education.filter(
        (educationItem) => educationItem.id !== id
      );
      return { ...prevState, education: [ ...filteredEdu ] };
    });
  };

  return (
    <div className="app-container">
      <div className="form-container">
        <Form
          personal={cv.personal}
          education={cv.education}
          workExperience={cv.workExperience}
          changePersonal={changePersonal}
          changeEducation={changeEducation}
          changeWork={changeWork}
          addEducation={addEducation}
          addWork={addWork}
          deleteEducation={deleteEducation}
          deleteWork={deleteWork}
        />
      </div>
      <div className="overview-container">
        <Overview
          personal={cv.personal}
          education={cv.education}
          workExperience={cv.workExperience}
        />
      </div>
    </div>
  );
};

export default App;
