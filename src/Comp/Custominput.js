import React from "react";
import "./Custominput.css"

function Input({label}){
    return(
        <>
        <label className="label">{label}</label>
        <input className="input"></input>
        </>
)}

export default Input;