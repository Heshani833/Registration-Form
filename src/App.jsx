import { useState } from "react";

import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <h1>Registration Form</h1>
        <form>
          <label htmlFor="fullname">Full Name</label>
          <input type="text" placeholder="Enter Full Name" name="fullname" />
          <label htmlFor="email">Email</label>
          <input type="text" placeholder="Enter Email" name="email" />
          <label htmlFor="role">Select Your Role</label>
          <input type="radio" name="role" />
          Student
          <input type="radio" name="role" />
          Employee
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;
