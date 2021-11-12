import React from 'react'
import "./Form.css";

const Form = ({children, ...props})=> 
<form className="formw" {...props}>{children}</form>

export default Form;
