import React, { useState } from "react";
import "./Contact.css";
import { Form } from "../../components";
import { Input } from "../../components";
import { NavLink } from "react-router-dom";

function Contact() {
  const [userData, setUserData] = useState({});
  const onChangeInput = (event) =>
    setUserData({ ...userData, [event.target.id]: event.target.value });
  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log(userData);
    alert("Your Password is invalid. Please check all your entries carefully");
  };
  function validateForm() {
    return userData.password && userData.password !== userData.confirmPassword;
  }
  return (
    <main className="contact">
      <Form onSubmit={validateForm() ? onFormSubmit : null}>
        <h1 className="h">Your Contact Details</h1>
        <Input
          id="name"
          label="Your Name:"
          onChange={onChangeInput}
          type="text"
          minLength={3}
          placeholder="Your Name"
          value={userData.name}
        />
        <Input
          id="email"
          label="Your email:"
          onChange={onChangeInput}
          type="email"
          minLength={3}
          placeholder="Your Email - such as username@blah-blah.co.uk"
          value={userData.email}
        />
        <Input
          id="password"
          label="Your password:"
          onChange={onChangeInput}
          type="password"
          minLength={8}
          placeholder="Must have at least 8 characters"
          value={userData.password}
        />
        <Input
          id="confirmPassword"
          label="Confirm password:"
          onChange={onChangeInput}
          type="password"
          minLength={8}
          placeholder=" Confirm Your Password"
          value={userData.confirmPassword}
        />
        <div className="cpl">
          <NavLink className="bh" to="/">
            BACK TO HOME
          </NavLink>
        </div>
      </Form>
    </main>
  );
}

export default Contact;
