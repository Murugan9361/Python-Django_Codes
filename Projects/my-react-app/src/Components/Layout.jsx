
import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="layout-container">
      <style>{`
        .layout-container {
          display: flex;
          min-height: 100vh;
          background: #f5f3ff;
          font-family: Arial, sans-serif;
        }

        .layout-sidebar {
          flex-shrink: 0;
        }

        .layout-main {
          flex: 1;
          min-width: 0;
          display: flex;
          flex-direction: column;
        }

        .layout-content {
          flex: 1;
          padding: 25px;
        }

        @media (max-width: 768px) {
          .layout-content {
            padding: 15px;
          }
        }
      `}</style>

      <div className="layout-sidebar">
        <Sidebar />
      </div>

      <div className="layout-main">
        <Navbar />

        <main className="layout-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
