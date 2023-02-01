import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [allEntry, setallEntry] = useState([]);
  function Email(event) {
    return setEmail(event.target.value);
  }
  function Name(event) {
    return setName(event.target.value);
  }
  function Address(event) {
    return setAddress(event.target.value);
  }
  function PhoneNumber(event) {
    return setPhoneNumber(event.target.value);
  }
  function submitForm(event) {
    event.preventDefault();
    const newEntry = {
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      address: address,
    };

    setallEntry([...allEntry, newEntry]);
    console.log(allEntry);
  }

  const PostData = async (e) => {
    e.preventDefault();
    const navigate = useNavigate();
    const { name, email, phoneNumber, address } = user;
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phoneNumber,
        address,
      }),
    });

    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("Registration failed");
      console.log("Registration failed");
    } else {
      window.alert("Registration Success");
      console.log("Registration Success");

      navigate("/home");
    }
  };
  return (
    <div className="loginForm">
      <form action="" method="POST" onSubmit={submitForm}>
        <div>
          <label className="loginText" htmlFor="Name">
            Name
          </label>
          <input
            className="loginInput"
            type="text"
            name="Name"
            id="Name"
            autoComplete="off"
            value={name}
            onChange={Name}
          />
        </div>
        <div>
          <label className="loginText" htmlFor="email">
            Email
          </label>
          <input
            className="loginInput"
            type="email"
            name="email"
            id="email"
            autoComplete="off"
            value={email}
            onChange={Email}
          />
        </div>
        <div>
          <label className="loginText" htmlFor="phoneNumber">
            Mobile Number
          </label>
          <input
            className="loginInput"
            type="number"
            name="phoneNumber"
            id="phoneNumber"
            autoComplete="off"
            value={phoneNumber}
            onChange={PhoneNumber}
          />
        </div>
        <div>
          <label className="loginText" htmlFor="Address">
            Address
          </label>
          <input
            className="loginInput"
            type="text"
            name="Address"
            id="Address"
            autoComplete="off"
            value={address}
            onChange={Address}
          />
        </div>
        <button className="cardBtn" type="submit" onClick={PostData}>
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
