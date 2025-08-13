import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">📚 Student Management</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="btn btn-light text-white ms-2" style={{ backgroundColor: "#0d6efd" }} to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-light text-white ms-2" style={{ backgroundColor: "#0d6efd" }} to="/add">+ Add Student</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
