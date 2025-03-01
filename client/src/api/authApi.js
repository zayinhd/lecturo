import axios from "axios";
import API_URL from ".";

const AUTH_API_URL = `${API_URL}/student/auth/` || `${API_URL}/lecturer/auth/`;

const login = (username, password) => {
    return axios
        .post(AUTH_API_URL + "login", {
            username,
            password,
        })
        .then((res) => {
            if (res.data.username) {
                localStorage.setItem("user", JSON.stringify(res.data));
            }

            return res.data;
        });
};

const logout = () => {
    localStorage.removeItem("user");
    return axios.post(AUTH_API_URL + "logout").then((res) => {
        return res.data;
    });
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

export { login, logout, getCurrentUser };
