import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
    Layout,
    Home,
    Login,
    Student,
    Lecturer,
    NoPage,
    ProtectedRoute,
    AdminLogin,
    Admin,
    Lecturers,
    Courses,
    LCourses,
    Timetable,
} from "./pages/index";

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
                    <Route
                        path="student"
                        element={<ProtectedRoute element={<Student />} />}
                    />
                    <Route
                        path="lecturer"
                        element={<ProtectedRoute element={<Lecturer />} />}
                    />
                    <Route
                        path="admin"
                        element={<ProtectedRoute element={<Admin />} />}
                    />

                    {/* student routes */}
                    <Route
                        path="student/courses"
                        element={<ProtectedRoute element={<Courses />} />}
                    />
                    <Route
                        path="student/lecturers"
                        element={<ProtectedRoute element={<Lecturers />} />}
                    />

                    {/* lecturer routes */}
                    <Route
                        path="lecturer/courses"
                        element={<ProtectedRoute element={<LCourses />} />}
                    />
                    <Route
                        path="lecturer/timetable"
                        element={<ProtectedRoute element={<Timetable />} />}
                    />

                    {/* Any other non existent page */}
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
