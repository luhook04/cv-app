import uniqid from "uniqid";

const emptyCv = {
  personal       : {
    firstName   : "",
    lastName    : "",
    jobTitle    : "",
    address     : "",
    phoneNum    : "",
    email       : "",
    description : ""
  },
  workExperience : [
    {
      position    : "",
      company     : "",
      startDate   : "",
      endDate     : "",
      description : "",
      id          : uniqid()
    }
  ],
  education      : [
    {
      school         : "",
      degree         : "",
      startDate      : "",
      graduationDate : "",
      id             : uniqid()
    }
  ]
};

export { emptyCv };
