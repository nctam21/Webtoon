import "./header.css"
import logo from "../../assets/logo/webtoon-logo.png"
const Header = () => (
    <div className="header">
      <div className="logo">
        <img src={logo}/>
      </div>
      <div className="navbar-sign">
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <button className="sign-in">Sign in</button>
          <button className="sign-up">Sign up</button>
        </div>
      </div>
    </div>
  );
  export default Header;