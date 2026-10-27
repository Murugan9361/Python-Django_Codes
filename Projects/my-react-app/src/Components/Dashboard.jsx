
import React from "react";

export default function Dashboard() {
  return (
    <div className="dashboard-content">
      <style>{`
        .dashboard-content {
          min-height: 100vh;
          padding: 30px;
          background: #f5f3ff;
          font-family: Arial, sans-serif;
          color: #1e1b4b;
        }

        .dashboard-content h1 {
          margin: 0 0 10px;
          font-size: 28px;
        }

        .dashboard-content .subtitle {
          color: #77778b;
          margin-bottom: 30px;
        }

        .dashboard-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .dashboard-card {
          padding: 25px;
          background: white;
          border-radius: 14px;
          box-shadow: 0 5px 20px rgba(99, 102, 241, 0.08);
        }

        .dashboard-card p {
          margin: 0 0 15px;
          color: #77778b;
          font-size: 15px;
        }

        .dashboard-card h2 {
          margin: 0;
          color: #6366f1;
          font-size: 28px;
        }

        .dashboard-message {
          margin-top: 25px;
          padding: 25px;
          background: white;
          border-radius: 14px;
          box-shadow: 0 5px 20px rgba(99, 102, 241, 0.08);
        }

        .dashboard-message h3 {
          margin-top: 0;
        }

        .dashboard-message p {
          color: #77778b;
          margin-bottom: 0;
        }

        @media (max-width: 768px) {
          .dashboard-content {
            padding: 20px;
          }

          .dashboard-cards {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <h1>Dashboard</h1>
      <p className="subtitle">Welcome back! Here's your overview.</p>

      <div className="dashboard-cards">
        <div className="dashboard-card">
          <p>Total Users</p>
          <h2>1,250</h2>
        </div>

        <div className="dashboard-card">
          <p>Total Revenue</p>
          <h2>$8,450</h2>
        </div>

        <div className="dashboard-card">
          <p>Total Orders</p>
          <h2>320</h2>
        </div>
      </div>

      <div className="dashboard-message">
        <h3>Overview</h3>
        <p>Your dashboard content will appear here.</p>
      </div>
    </div>
  );
}
