// navbar.jsx
import { Link } from "react-router-dom";
import "./navbar.css"; // CSS 파일을 import 합니다.

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">YONGCHA</div> {/* 핑크색의 YONGCHA 텍스트 */}
      <div className="buttons">
        <Link to="/login" className="button login">Login</Link>
        <Link to="/signup" className="button signup">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;
