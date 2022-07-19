import { Link } from "react-router-dom"

const Navbar = ({ user }) => {
  return (
    <div className="navbar">
      <span className="logo"><Link className="link" to="/">Social App</Link></span>
      {user ? (
        <ul className="list">
          <li className="listItem">
            <img src="https://th-thumbnailer.cdn-si-edu.com/5a79C6jJ8BrChMX5tgEKiMI_qqo=/1000x750/filters:no_upscale():focal(792x601:793x602)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/52/e4/52e44474-c2dc-41e0-bb77-42a904695196/this-image-shows-a-portrait-of-dragon-man-credit-chuang-zhao_web.jpg" alt="" className="avatar" />
          </li>
          <li className="listItem">John Doe</li>
          <li className="listItem">Logout</li>
        </ul>
      ) : (
        <Link className="link" to="/login">Login</Link>
      )}
    </div>
  )
}

export default Navbar