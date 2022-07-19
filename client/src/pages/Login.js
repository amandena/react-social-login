import google from '../images/google.png'
import facebook from '../images/facebook.png'
import github from '../images/github.png'

const Login = () => {
  return (
    <div className="login">
      <h1 className="loginTitle">Choose a Login Method</h1>
      <div className="wrapper">
        <div className="left">
          <div className="loginButton google">
            <img src={google} alt="Google" className="icon" />
            Google  
          </div>  
          <div className="loginButton facebook">
            <img src={facebook} alt="Facebook" className="icon" />  
            Facebook
          </div>
          <div className="loginButton github">
            <img src={github} alt="GitHub" className="icon" />  
            GitHub
          </div>
        </div>
        <div className="center">
          <div className="line"/>
          <div className="or">OR</div>
        </div>
        <div className="right">
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Password" />
          <button className="submit">Login</button>
        </div>
      </div> 
    </div>
  )
}

export default Login