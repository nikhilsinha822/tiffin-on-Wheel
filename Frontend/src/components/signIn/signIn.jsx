import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./signin.css";

const SignIn = ({setEmail}) => {
  const baseURL = "https://snuhackathon.onrender.com";
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  //setEmail('123@abc')
  const handleClick = () => {
    const { email, password } = user;
    if (email && password) {
      axios.post(`${baseURL}/login`,user).then((res) => {
        alert(res.data.msg);
        //console.log(res.data);
        setEmail(user.email);
      });
    } else {
      alert("invalid");
    }
  };
  return (
    <>
      <div className="basicForm">
        <span>
          <h1>Sign In</h1>
          <input
            placeholder="Email"
            name="email"
            type={"email"}
            value={user.email}
            onChange={handleChange}
          />
          <input
            placeholder="password"
            name="password"
            type={"password"}
            value={user.password}
            onChange={handleChange}
          />
          <button onClick={handleClick}>Sign In</button>
          <span>Don't have account? <Link to='/signUp'>Sign Up</Link></span>
        </span>
      </div>
    </>
  );
};

export default SignIn;
