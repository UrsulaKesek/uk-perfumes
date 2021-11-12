import React from "react";
import "./Form.css";

const Form = ({ children, onSubmit }) => (
  <form className="form" onSubmit={onSubmit}>
    {children}
    <button className="submit">SUBMIT</button>
  </form>
);

export default Form;
