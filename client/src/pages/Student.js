import React from "react";
import Button from "../components/button/Button";
import { Link } from "react-router-dom";

const Student = () => {
    return (
        <>
            <p>Welcome, name</p>
            <div>
                <Link to="/courses">
                    <Button>Courses</Button>
                </Link>
                <Link to="/lecturers">
                    <Button>Lecturers</Button>
                </Link>
            </div>
        </>
    );
};

export default Student;
