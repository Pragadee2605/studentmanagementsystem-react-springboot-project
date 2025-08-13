import { useState, useEffect } from "react";
import { createStudent, getStudentById, updateStudent } from "../services/studentService";
import { useNavigate, useParams } from "react-router-dom";

export default function StudentForm() {
  const [student, setStudent] = useState({ firstName: "", lastName: "", email: "" });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getStudentById(id)
        .then(res => setStudent(res.data))
        .catch(err => console.error(err));
    }
  }, [id]);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const action = id ? updateStudent(id, student) : createStudent(student);
    action.then(() => navigate("/")).catch(err => console.error(err));
  };

  return (
    <div className="container mt-4">
      <div className="card shadow">
        <div className="card-header bg-primary text-white fw-bold">
          {id ? "Edit Student" : "Add Student"}
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">First Name</label>
              <input
                name="firstName"
                value={student.firstName}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter first name"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Last Name</label>
              <input
                name="lastName"
                value={student.lastName}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter last name"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                value={student.email}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter email"
                required
              />
            </div>
            <button type="submit" className="btn btn-success">
              {id ? "Update" : "Create"}
            </button>
            <button type="button" onClick={() => navigate("/")} className="btn btn-secondary ms-2">
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
