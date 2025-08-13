import { useEffect, useState } from "react";
import { getAllStudents, deleteStudent } from "../services/studentService";
import { Link } from "react-router-dom";

export default function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = () => {
    getAllStudents()
      .then(res => setStudents(res.data))
      .catch(err => console.error(err));
  };

  const handleDelete = (id) => {
    if (window.confirm("Delete this student?")) {
      deleteStudent(id)
        .then(() => loadStudents())
        .catch(err => console.error(err));
    }
  };

  return (
    <div className="container-fluid mt-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="fw-bold">Students List</h2>
        <Link to="/add" className="btn btn-success">+ Add New</Link>
      </div>
      <table className="table table-hover table-striped align-middle shadow-sm">
        <thead className="table-primary">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map(s => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.firstName} {s.lastName}</td>
              <td>{s.email}</td>
              <td className="text-center">
                <Link to={`/edit/${s.id}`} className="btn btn-warning btn-sm me-2">✏ Edit</Link>
                <button onClick={() => handleDelete(s.id)} className="btn btn-danger btn-sm">🗑 Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
