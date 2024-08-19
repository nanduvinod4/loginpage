import logo from './logo.svg';
import './App.css';
import LoginContainer from "./Comp/Logincontainer";
import Signupcontainer from "./Comp/Signupcontainer"


function App() {
  return(
    <div className='div-container'>
      <LoginContainer />
      <Signupcontainer/>
    </div>
  )
}


export default App;
