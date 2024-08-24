import './App.css';
import LoginContainer from "./Comp/Logincontainer";
import Signupcontainer from "./Comp/Signupcontainer"
import NavBar from "./Comp/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Comp/Footer"



function App() {
  return(
    <div>
      <NavBar/>
    <div className='div-container'>
      <LoginContainer />
      <Signupcontainer/>
    </div>
    <Footer/>
    </div>
  )
}


export default App;
