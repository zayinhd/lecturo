import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/button/Button";

const Home = () => {
    return (
        <section className="App-content">
            <Link
                to={{ pathname: "/student/login", state: { role: "student" } }}
            >
                <Button>Student</Button>
            </Link>
            <Link
                to={{
                    pathname: "/lecturer/login",
                    state: { role: "lecturer" },
                }}
            >
                <Button>Lecturer</Button>
            </Link>
        </section>
    );
};

export default Home;
