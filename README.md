# Student Management System     With this project any one can understand how to connect the frontend and backend

This project contains two parts:
- **frontend/** — React application
- **backend/** — Spring Boot application


**Running the Frontend (React)**
1. Navigate to the frontend directory:
   cd frontend
   cd student-management-ui
   cd tudent-management-ui

   
2.npm install


3.npm run dev


4.Open your browser and go to the url in the cmd

**Running the Backend (Spring Boot)**
Navigate to the backend directory:
cd backend
Build the project using Maven or Gradle (depending on your build tool):

For Maven:
mvn clean install

mvn spring-boot:run

The backend will start on port 8080 by default


## Frontend & Backend Integration

This project has a React frontend (using Vite) and a Spring Boot backend.

### CORS Setup

To allow the React frontend (running on `http://localhost:5173`) to communicate with the backend APIs (running on `http://localhost:8080`), the backend controller uses the `@CrossOrigin` annotation:

**in backend**
@RestController
@RequestMapping("/api/students")
**@CrossOrigin(origins = "http://localhost:5173") react url**
public class StudentController {
    // API endpoints here
}

**in frontend**
at the studentService.js
**const API_URL = "http://localhost:8080/api/students"; // Spring Boot backend URL**
