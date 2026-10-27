
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  const handleLogout=()=>{
    localStorage.removeItem('isLoggedin')
     navigate("/")
  }

  return (
    <div className="sidebar">
      <style>{`
        .sidebar {
          width: 240px;
          min-height: 100vh;
          padding: 25px 15px;
          background: linear-gradient(180deg, #6366f1, #7c3aed);
          color: white;
          font-family: Arial, sans-serif;
          box-sizing: border-box;
        }

        .sidebar-logo {
          font-size: 23px;
          font-weight: bold;
          text-align: center;
          margin-bottom: 35px;
        }

        .sidebar-menu {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .sidebar-menu button {
          width: 100%;
          padding: 13px 15px;
          border: none;
          border-radius: 8px;
          background: transparent;
          color: white;
          text-align: left;
          font-size: 15px;
          cursor: pointer;
          transition: background 0.2s;
        }

        .sidebar-menu button:hover,
        .sidebar-menu button.active {
          background: rgba(255, 255, 255, 0.2);
        }

        .sidebar-logout {
          margin-top: 30px;
          border-top: 1px solid rgba(255, 255, 255, 0.25);
          padding-top: 20px;
        }
      `}</style>

      <div className="sidebar-logo">My Dashboard</div>

      <nav className="sidebar-menu">
        <button className="active" onClick={() => navigate("/dashboard")}>
          Dashboard
        </button>

        <button onClick={() => navigate("/dashboard/home")}>
          Students
        </button>

        <button onClick={() => navigate("/dashboard/about")}>
          About
        </button>
      </nav>

      <div className="sidebar-logout">
        <nav className="sidebar-menu">
          <button onClick={() =>handleLogout()}>
            Logout
          </button>
        </nav>
      </div>
    </div>
  );
}
