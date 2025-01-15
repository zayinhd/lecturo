import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Student from "./pages/Student";
import Lecturer from "./pages/Lecturer";
import NoPage from "./pages/NoPage";
import AdminLogin from "./pages/AdminLogin";
import Admin from "./pages/Admin";
import Lecturers from "./pages/features/studentfeatures/Lecturers";
import Courses from "./pages/features/studentfeatures/Courses";
import LCourses from "./pages/features/lecturerfeatures/LCourses";
import Timetable from "./pages/features/lecturerfeatures/Timetable";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    {/* Home page */}
                    <Route index element={<Home />} />

                    {/* Login routes */}
                    <Route path="student/login" element={<Login />} />
                    <Route path="lecturer/login" element={<Login />} />
                    <Route path="admin/login" element={<AdminLogin />} />

                    {/* Portals */}
                    <Route path="student" element={<Student />} />
                    <Route path="lecturer" element={<Lecturer />} />
                    <Route path="admin" element={<Admin />} />

                    {/* student routes */}
                    <Route path="student/courses" element={<Courses />} />
                    <Route path="student/lecturers" element={<Lecturers />} />

                    {/* lecturer routes */}
                    <Route path="lecturer/courses" element={<LCourses />} />
                    <Route path="lecturer/timetable" element={<Timetable />} />

                    {/* Any other non existent page */}
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
