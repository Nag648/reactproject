import React, { useState } from "react";
import "./Form.css";

const Form = (props) => {
  
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [phno, setPhno] = useState("");
  const [gender, setGender] = useState("");

  

  const handleInputChange = (event) => {
    console.log("value",event.target.value,"name",event.target.name)
    if(event.target.name=="fname"){
      setFname(event.target.value);
    }else if (event.target.name=="lname"){
      setLname(event.target.value)
    }
  else if (event.target.name=="email"){
    setLname(event.target.value)
  }
else if (event.target.name=="age"){
  setLname(event.target.value)
}
else if (event.target.name=="phno"){
  setLname(event.target.value)
}
else if (event.target.name=="gender"){
  setLname(event.target.value)
}




  };
 

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("fname:",fname,"last:",lname)
    // console.log(formData)
    // console.log(fname, lname, email, phno, gender, age);
    // Access the form data and perform actions using props
    // props.onSubmit();
  };

  console.log("stateData","fname",fname,"lname",lname)
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            name="fname"
           value={fname}   
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            name="lname"
            value={lname}
            onChange={handleInputChange}
          />
        </div>
         <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Phone No</label>
          <input
            type="number"
            name="phno"
            value={phno}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Age</label>
          <input
            type="number"
            name="age"
            value={age}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>gender</label>
          <input
            type="text"
            name="gender"
            value={gender}
            onChange={handleInputChange}
          />
        </div> 
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
