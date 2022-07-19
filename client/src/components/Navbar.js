import { Link } from "react-router-dom"

const Navbar = ({ user }) => {
  const logout = () => {
    window.open("http://localhost:5001/auth/logout", "_self")
  }

  if (!user) {
    return <div>Loading...</div>
  }

  return (
    <div className="navbar">
      <span className="logo"><Link className="link" to="/">Social App</Link></span>
      {user ? (
        <ul className="list">
          <li className="listItem">
            <img src={user.photos[0].value} alt="" className="avatar" />
          </li>
          <li className="listItem">{user.displayName}</li>
          <li className="listItem" onClick={logout}>Logout</li>
        </ul>
      ) : (
        <Link className="link" to="/login">Login</Link>
      )}
    </div>
  )
}

export default Navbar