import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AddStudentPage from "./pages/AddStudentPage";
import EditStudentPage from "./pages/EditStudentPage";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddStudentPage />} />
        <Route path="/edit/:id" element={<EditStudentPage />} />
      </Routes>
    </Router>
  );
}
