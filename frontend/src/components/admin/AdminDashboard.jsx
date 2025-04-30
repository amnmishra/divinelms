import React from "react";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBookOpen,
  FaChartBar,
  FaUsers,
} from "react-icons/fa";

const AdminDashboard = () => {
  const admin = JSON.parse(localStorage.getItem("admin"));
  const location = useLocation();

  const links = [
    { title: "Manage Students", icon: <FaUserGraduate />, path: "manage-students" },
    { title: "Manage Teachers", icon: <FaChalkboardTeacher />, path: "manage-teachers" },
    { title: "Manage Courses", icon: <FaBookOpen />, path: "courses" },
    { title: "System Analytics", icon: <FaChartBar />, path: "analytics" },
    { title: "Manage Users", icon: <FaUsers />, path: "all-users" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 pt-16 flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="md:fixed md:top-16 md:left-0 z-40 bg-white shadow-lg w-full md:w-64 md:h-full flex md:flex-col items-center md:items-start p-4 md:space-y-6 overflow-x-auto md:overflow-y-auto">
        <div className="hidden md:block w-full mb-4">
          <h1 className="text-2xl font-bold text-gray-800">Admin Panel</h1>
          <p className="text-sm text-gray-600">
            Welcome, <span className="font-semibold">{admin?.name}</span>
          </p>
        </div>

        <nav className="flex md:flex-col justify-around md:items-start w-full space-x-4 md:space-x-0 md:space-y-4">
          {links.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className={({ isActive }) =>
                `flex flex-col md:flex-row items-center md:items-center space-y-1 md:space-y-0 md:space-x-3 p-2 rounded-lg text-gray-700 hover:bg-blue-100 transition ${
                  isActive ? "bg-blue-200 font-semibold" : ""
                }`
              }
            >
              <span className="text-xl">{link.icon}</span>
              <span className="text-xs md:text-base hidden sm:inline md:inline">
                {link.title}
              </span>
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 mt-4 md:mt-0 md:ml-64">
        {location.pathname === "/admin/dashboard" ? (
          <div className="flex flex-col items-center justify-center h-full rounded-2xl animate-fadeIn text-center">
            <h2 className="text-2xl md:text-4xl font-extrabold text-gray-800 mb-4">
              Welcome, Admin! 🎉
            </h2>
            <p className="text-md md:text-xl text-gray-600 px-2 md:px-4">
              Manage your platform efficiently using the sidebar options.
            </p>
          </div>
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
