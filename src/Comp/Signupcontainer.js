import Custominput from "./Custominput"
import "./Signup.css"
import CustomBtn from "./CustomBtn";

function Signupcontainer(){
    return(
        <div className="signup">
            <h3>Sign Up</h3>
            <Custominput label="UserName"/>
            <Custominput label="Password"/>
            <Custominput label="Confirm Password"/>
            <CustomBtn label="SignUp"/>
        </div>
    )
}

export default Signupcontainer;