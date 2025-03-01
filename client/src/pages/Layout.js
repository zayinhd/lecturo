import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "../App.css";
import Button from "../components/button/Button";
import { logOut } from "../store/reducers/authSlice";

const Layout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

    const handleLogout = () => {
        dispatch(logOut());
        navigate("/");
    };

    return (
        <div className="App">
            <header className="App-header border-b-2 border-white">
                <h1>Lecturo</h1>
                <ul>
                    <Button>
                        <p className="text-sm">News</p>
                    </Button>
                    {isLoggedIn && (
                        <Button onClick={handleLogout}>Logout</Button>
                    )}
                </ul>
            </header>
            <main className="App-content max-md:text-sm">
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
