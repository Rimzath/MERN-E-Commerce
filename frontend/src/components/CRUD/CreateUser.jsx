import React from "react";
import { useState } from "react";

const Createuser = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="formupd vw-100 bg-white rounded p-3">
        <form>
          <h2>Add User</h2>
          <div className="mb-2">
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              id="inpNameUser"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control"
              id="inpEmailUser"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Age</label>
            <input
              type="text"
              placeholder="Enter Age"
              className="form-control"
              id="inpAgeUser"
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="flexContainer">
            <button className="btnSubm btn btn-success" id="btnRecor">
              Submit
            </button>
            <button className="btn btn-danger" id="btnCancelAdd">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Createuser;
