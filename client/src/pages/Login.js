import { useLocation } from "react-router-dom";
import { useState } from "react";
import Input from "../components/input/Input";
import Button from "../components/button/Button";

const Login = () => {
    const location = useLocation();
    const { role } = location.state || {};

    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const { name, password } = formData;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (role === "student") {
                const res = await fetch("/api/student/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        ...formData,
                    }),
                });

                const data = await res.json();
                if (res.ok) {
                    localStorage.setItem("token", data.token);

                    window.location.href = "/student";
                } else {
                    alert(data.message || "Login failed. Please try again.");
                }
            } else if (role === "lecturer") {
                const res = await fetch("/api/lecturer/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        ...formData,
                    }),
                });

                const data = await res.json();
                if (res.ok) {
                    localStorage.setItem("token", data.token);

                    window.location.href = "/lecturer";
                } else {
                    alert(data.message || "Login failed. Please try again.");
                }
            }
        } catch (err) {
            console.error("Error: ", err);
            alert("An error occured while logging in.");
        }
    };

    return (
        <div className="h-[100vh] flex flex-col align-middle justify-center">
            Welcome to the login page
            <form onSubmit={handleSubmit}>
                <div className="m-5">
                    <Input
                        type="text"
                        name="username"
                        value={name}
                        onChange={handleChange}
                        placeholder="Username"
                        required
                    />
                </div>
                <div className="m-5">
                    <Input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                        id="password"
                        placeholder="Password"
                        required
                    />
                </div>
                <Button type="submit">Login</Button>
            </form>
        </div>
    );
};

export default Login;
