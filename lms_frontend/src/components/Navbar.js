
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Learning Management System</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <div className="navbar-nav ms-auto">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Courses</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Instructors</a>
        </li>
        <li>
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              User Icon
            </button>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="/login">Student LogIn</Link></li>
              <li><Link className="dropdown-item" to="/instructor-login">Instructor LogIn</Link></li>
              <li><Link className="dropdown-item"  to="/register">Student Register</Link></li>
              <li><Link className="dropdown-item"  to="/instructor-register">Instructor Register</Link></li>
              <li><Link className="dropdown-item"  to="/user-dashboard">Student Dashboard</Link></li>
              <li><Link className="dropdown-item"  to="/instructor-dashboard">Instructor Dashboard</Link></li>
              <li><Link className="dropdown-item"  to="/Logout">Log Out</Link></li>
            </ul>
          </div>
        </li>       
      </ul>
      </div>
    </div>
  </div>
</nav>
    
  );
}

export default Navbar;