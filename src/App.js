import uniqid from "uniqid";
import React, { useState } from "react";
import Form from "./components/Form";
import {
  emptyEducation,
  emptyPersonal,
  emptyWork
} from "./components/EmptyObjs/EmptyObjs";
import Overview from "./components/Overview/Overview";
import "./App.css";

const App = () => {
  const [ personal, setPersonal ] = useState(emptyPersonal);
  const [ workExperience, setWorkExperience ] = useState([
    { emptyWork, id: uniqid() }
  ]);
  const [ education, setEducation ] = useState([
    { emptyEducation, id: uniqid() }
  ]);

  const changePersonal = (e) => {
    const { name, value } = e.target;
    setPersonal((prevState) => ({
      personal : {
        ...prevState,
        [name] : value
      }
    }));
  };

  const changeWork = (e, id) => {
    const { name, value } = e.target;
    setWorkExperience((prevState) => {
      const newWorkArray = prevState.map((workItem) => {
        if (workItem.id === id) {
          return {
            ...workItem,
            [name] : value
          };
        }
        return workItem;
      });
      return { workExperience: [ ...newWorkArray ] };
    });
  };

  const changeEducation = (e, id) => {
    const { name, value } = e.target;
    setEducation((prevState) => {
      const newEducationArray = prevState.map((educationItem) => {
        if (educationItem.id === id) {
          return {
            ...educationItem,
            [name] : value
          };
        }
        return educationItem;
      });
      return { education: [ ...newEducationArray ] };
    });
  };

  const addWork = () => {
    setWorkExperience((prevState) => ({
      workExperience : [
        ...prevState,
        {
          ...emptyWork,
          id : uniqid()
        }
      ]
    }));
  };

  const addEducation = () => {
    setEducation((prevState) => ({
      education : [
        ...prevState,
        {
          ...emptyEducation,
          id : uniqid()
        }
      ]
    }));
  };

  const deleteWork = (id) => {
    setWorkExperience((prevState) => {
      const filteredWork = prevState.filter(
        (workItem) => workItem.id !== id
      );
      return { workExperience: [ ...filteredWork ] };
    });
  };

  const deleteEducation = (id) => {
    setEducation((prevState) => {
      const filteredEdu = prevState.filter(
        (educationItem) => educationItem.id !== id
      );
      return { education: [ ...filteredEdu ] };
    });
  };

  return (
    <div className="app-container">
      <div className="form-container">
        <Form
          personal={personal}
          education={education}
          workExperience={workExperience}
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
          personal={personal}
          education={education}
          workExperience={workExperience}
        />
      </div>
    </div>
  );
};

export default App;
