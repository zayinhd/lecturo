import { Outlet } from "react-router-dom";
import "../App.css";
import Button from "../components/button/Button";

const Layout = () => {
    return (
        <div className="App">
            <header className="App-header border-b-2 border-white">
                <h1>Lecturo</h1>
                <Button>
                    <p className="text-sm">News</p>
                </Button>
            </header>
            <main className="App-content max-md:text-sm">
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
