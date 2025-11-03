

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="#">Learning Management System</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
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
        
      </ul>
      </div>
    </div>
  </div>
</nav>
    
  );
}

export default Navbar;