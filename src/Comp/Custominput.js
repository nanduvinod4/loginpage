import React from "react";
import "./Custominput.css"

function Input({label,type}){
    return(
        <div className="inputDiv">
        <label className="label">{label}</label>
        <input className="input" type={type}></input>
        </div>
)}

export default Input;