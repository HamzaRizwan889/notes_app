import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css';
import Create from "../create/index.jsx"
import Table from "../view/index.jsx";

const Navbar = () => (
    <nav className="navbar-container">
        <ul className="nav-list">
            <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
                <Link to="/create" className="nav-link">Create New</Link>
            </li>
            <li className="nav-item">
                <Link to="/view" className="nav-link">View All</Link>
            </li>
        </ul>
    </nav>
);

const Home = () => <h1>Home</h1>;
const CreateNew = () => {

    return (
        <div>
            <div><Create/></div>
        </div>
    );
};
const ViewAll = () => {
    return(
        <div><Table/></div>
    );
}

const AppLayout = () => (
    <Router>
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create" element={<CreateNew />} />
                <Route path="/view" element={<ViewAll />} />
            </Routes>
        </div>
    </Router>
);

export default AppLayout;
