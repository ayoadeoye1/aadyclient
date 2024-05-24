import React from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

const AdminDashboard = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const logoutUser = () => {
        localStorage.clear();
        navigate("/admin-signin");
    };

    return (
        <div>
            <div className="bg-gray-100 min-h-screen">
                <header className="bg-slate-300 shadow-lg text-white">
                    <div className="container mx-auto py-4 px-8 flex items-center justify-between">
                        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
                        <button
                            onClick={logoutUser}
                            className="text-blue-400 hover:underline"
                        >
                            Log Out
                        </button>
                    </div>
                    <nav className="bg-slate-400 py-4 px-8">
                        <div className="container mx-auto flex items-center justify-between">
                            <ul className="flex">
                                <NavItem
                                    to="/admin-dashboard/home"
                                    location={location}
                                >
                                    Home
                                </NavItem>
                                <NavItem
                                    to="/admin-dashboard/aboutme"
                                    location={location}
                                >
                                    About Me
                                </NavItem>
                                <NavItem
                                    to="/admin-dashboard/skill"
                                    location={location}
                                >
                                    Skills
                                </NavItem>
                                <NavItem
                                    to="/admin-dashboard/project"
                                    location={location}
                                >
                                    Projects
                                </NavItem>
                                <NavItem
                                    to="/admin-dashboard/blog"
                                    location={location}
                                >
                                    Blogs
                                </NavItem>
                                <NavItem
                                    to="/admin-dashboard/edu"
                                    location={location}
                                >
                                    Education
                                </NavItem>
                                <NavItem
                                    to="/admin-dashboard/msg"
                                    location={location}
                                >
                                    Messages
                                </NavItem>
                            </ul>
                        </div>
                    </nav>
                </header>
                <div className="container mx-auto pt-8">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

const NavItem = ({ to, children, location }) => {
    const isActive = location.pathname === to;
    return (
        <li className="mr-4">
            <Link
                to={to}
                className={`text-white ${
                    isActive ? "underline" : "hover:underline"
                }`}
            >
                {children}
            </Link>
        </li>
    );
};

export default AdminDashboard;
