import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar({ onMenuClick }) {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
  .navbar {
    position: sticky;
    top: 0;
    z-index: 50;
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 78px;
    padding: 14px 32px;
    border-bottom: 1px solid #ededf5;
    background: rgba(255, 255, 255, 0.96);
    font-family: Arial, sans-serif;
    gap: 18px;
  }

  .navbar-left,
  .navbar-right {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .breadcrumb {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #9292a7;
    font-size: 13px;
  }

  .breadcrumb strong {
    color: #1e1b4b;
  }

  .breadcrumb-separator {
    color: #c5c5d5;
  }

  .navbar-search {
    display: flex;
    align-items: center;
    gap: 9px;
    width: 245px;
    height: 40px;
    padding: 0 11px;
    border: 1px solid #ededf5;
    border-radius: 10px;
    background: #fafaff;
    color: #88889f;
  }

  .navbar-search input {
    width: 100%;
    min-width: 0;
    border: 0;
    outline: 0;
    background: transparent;
    font-size: 12px;
  }

  .navbar-search kbd {
    padding: 3px 5px;
    border: 1px solid #e5e5f0;
    border-radius: 4px;
    font-size: 10px;
    white-space: nowrap;
  }

  .notification-button {
    position: relative;
    width: 38px;
    height: 38px;
    border: 1px solid #ededf5;
    border-radius: 10px;
    color: #555570;
    background: white;
    font-size: 20px;
  }

  .notification-button:hover {
    background: #f5f3ff;
    color: #6366f1;
  }

  .notification-dot {
    position: absolute;
    top: 8px;
    right: 8px;
    width: 7px;
    height: 7px;
    border: 1px solid white;
    border-radius: 50%;
    background: #f87171;
  }

  .navbar-divider {
    width: 1px;
    height: 35px;
    background: #ededf5;
  }

  .navbar-profile {
    display: flex;
    align-items: center;
    gap: 10px;
    border: 0;
    background: transparent;
    text-align: left;
  }

  .profile-avatar {
    display: grid;
    place-items: center;
    width: 40px;
    height: 40px;
    border-radius: 12px;
    color: white;
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    font-size: 17px;
    font-weight: bold;
  }

  .profile-info {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .profile-info strong {
    color: #1e1b4b;
    font-size: 12px;
  }

  .profile-info span {
    color: #9999ad;
    font-size: 11px;
  }

  .profile-chevron {
    color: #88889f;
  }

  .menu-toggle {
    display: none;
    border: 0;
    background: transparent;
    color: #1e1b4b;
    font-size: 23px;
  }

  @media (min-width: 769px) {
    .navbar {
      margin-left: 258px;
    }
  }

  @media (max-width: 768px) {
    .menu-toggle {
      display: block;
    }

    .navbar {
      min-height: 68px;
      padding: 12px 16px;
    }

    .navbar-left,
    .navbar-right {
      gap: 10px;
    }

    .navbar-search {
      width: 38px;
      padding: 0 9px;
      border: 0;
      background: #f5f3ff;
    }

    .navbar-search input,
    .navbar-search kbd,
    .profile-info,
    .profile-chevron,
    .navbar-divider {
      display: none;
    }

    .notification-button {
      width: 34px;
      height: 34px;
    }

    .breadcrumb {
      gap: 6px;
      font-size: 11px;
    }
  }

  @media (max-width: 380px) {
    .breadcrumb span:first-child,
    .breadcrumb-separator {
      display: none;
    }
  }
`}</style>

      <header className="navbar">
        <div className="navbar-left">
          <button
            className="menu-toggle"
            onClick={onMenuClick}
            aria-label="Open navigation menu"
          >
            ☰
          </button>

          <div className="breadcrumb">
            <span>Workspace</span>
            <span className="breadcrumb-separator">/</span>
            <strong>Dashboard</strong>
          </div>
        </div>

        <div className="navbar-right">
          <label className="navbar-search">
            <span>⌕</span>
            <input
              type="search"
              placeholder="Search anything..."
              aria-label="Search dashboard"
            />
            <kbd>⌘ K</kbd>
          </label>

          <button
            className="notification-button"
            aria-label="Notifications"
            onClick={() => window.alert("You are all caught up!")}
          >
            ♧
            <span className="notification-dot" />
          </button>

          <div className="navbar-divider" />

          <button
            className="navbar-profile"
            onClick={() => navigate("/dashboard/settings")}
          >
            <div className="profile-avatar">A</div>
            <div className="profile-info">
              <strong>Admin User</strong>
              <span>Administrator</span>
            </div>
            <span className="profile-chevron">⌄</span>
          </button>
        </div>
      </header>
    </>
  );
}
