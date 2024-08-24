import Custominput from "./Custominput"
import "./Signup.css"
import CustomBtn from "./CustomBtn";

function Signupcontainer(){
    return(
        <div className="signup">
            <h3>Sign Up</h3>
            <Custominput label={"UserName"} type={"text"}/>
            <Custominput label={"Mob Number"} type={"number"}/>
            <Custominput label={"E-mail"} type={"text"}/>
            <Custominput label={"Password"} type={"password"}/>
            <Custominput label="Confirm Password" type={"password"}/>
            <CustomBtn label="SignUp"/>
        </div>
    )
}

export default Signupcontainer;