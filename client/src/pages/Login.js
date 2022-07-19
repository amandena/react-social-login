import Google from '../images/google.png'
import Facebook from '../images/facebook.png'
import Github from '../images/github.png'

const Login = () => {
  const google = () => {
    window.open("http://localhost:5001/auth/google/callback", "_self")
  }

  const github = () => {
    window.open("http://localhost:5001/auth/github/callback", "_self")
  }

  const facebook = () => {
    window.open("http://localhost:5001/auth/facebook/callback", "_self")
  }

  return (
    <div className="login">
      <h1 className="loginTitle">Choose a Login Method</h1>
      <div className="wrapper">
        <div className="left">
          <div className="loginButton google" onClick={google}>
            <img src={Google} alt="Google" className="icon" />
            Google  
          </div>  
          <div className="loginButton facebook" onClick={facebook}>
            <img src={Facebook} alt="Facebook" className="icon" />  
            Facebook
          </div>
          <div className="loginButton github" onClick={github}>
            <img src={Github} alt="GitHub" className="icon" />  
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