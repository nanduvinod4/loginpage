import Custominput from "./Custominput"
import "./Login.css"
import CustomBtn from "./CustomBtn" 

function LoginContainer(){
    return(
        <div className="login">
            <h3>Log In</h3>
            <Custominput label="UserName"/>
            <Custominput label="Password"/>
            <CustomBtn label="Login"/>
        </div>  
)}

export default LoginContainer;