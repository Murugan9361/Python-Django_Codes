
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    let data={
            username:username,
            password:password
        }
    
        try {
            console.log(data)
            let postdata=await axios.post("http://localhost:8000/myapp/login/",data)
            console.log(postdata)
    
             if(postdata.status==200){
                localStorage.setItem("isLoggedin",true)
                alert("Login Successfully")
                navigate("/dashboard")
             }
            
        } catch (error) {
            alert("invalid email or password")
            console.log(error)
            
        }

    // Demo validation only. Connect your API here.
   
  };

  return (
    <div className="login-page">
      <style>{`
        * {
          box-sizing: border-box;
        }

        .login-page {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
          font-family: Arial, sans-serif;
          background: linear-gradient(
            135deg, #e0e7ff, #f5f3ff, #fdf2f8
          );
        }

        .login-card {
          width: 100%;
          max-width: 420px;
          padding: 40px;
          background: white;
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(49, 46, 129, 0.12);
        }

        .login-logo {
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 22px;
          border-radius: 16px;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: white;
          font-size: 26px;
          font-weight: bold;
        }

        .login-title {
          margin: 0;
          text-align: center;
          font-size: 28px;
          color: #1e1b4b;
        }

        .login-subtitle {
          margin: 10px 0 30px;
          text-align: center;
          color: #77778b;
          font-size: 14px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-label {
          display: block;
          margin-bottom: 8px;
          color: #35354d;
          font-size: 14px;
          font-weight: 600;
        }

        .form-input {
          width: 100%;
          height: 48px;
          padding: 0 14px;
          border: 1px solid #dedeea;
          border-radius: 10px;
          outline: none;
          font-size: 14px;
          background: white;
        }

        .form-input:focus {
          border-color: #6366f1;
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.12);
        }

        .password-wrap {
          position: relative;
        }

        .password-wrap .form-input {
          padding-right: 65px;
        }

        .toggle-password {
          position: absolute;
          top: 50%;
          right: 12px;
          transform: translateY(-50%);
          border: none;
          background: none;
          color: #6366f1;
          font-weight: 600;
          cursor: pointer;
        }

        .form-options {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
          margin: 4px 0 24px;
          font-size: 13px;
        }

        .remember-label {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #626278;
        }

        .remember-label input {
          accent-color: #6366f1;
        }

        .login-link {
          color: #6366f1;
          font-weight: 600;
          text-decoration: none;
        }

        .login-link:hover {
          text-decoration: underline;
        }

        .login-button {
          width: 100%;
          height: 49px;
          border: none;
          border-radius: 10px;
          background: linear-gradient(135deg, #6366f1, #7c3aed);
          color: white;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          transition: 0.2s;
        }

        .login-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(99, 102, 241, 0.25);
        }

        .signup-text {
          margin: 26px 0 0;
          text-align: center;
          color: #77778b;
          font-size: 14px;
        }

        @media (max-width: 480px) {
          .login-card {
            padding: 30px 22px;
          }
        }
      `}</style>

      <div className="login-card">
        <div className="login-logo">L</div>

        <h1 className="login-title">Welcome Back!</h1>
        <p className="login-subtitle">
          Sign in to continue to your account
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="username">
              User Name 
            </label>
            <input
              className="form-input"
              id="email"
              type="text"
              placeholder="enter the username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
             
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="password">
              Password
            </label>

            <div className="password-wrap">
              <input
                className="form-input"
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
              />

              <button
                className="toggle-password"
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <div className="form-options">
            <label className="remember-label">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              Remember me
            </label>

            <Link
              to="/forgot-password"
              className="login-link"
            >
              Forgot password?
            </Link>
          </div>

          <button className="login-button" type="submit">
            Sign In →
          </button>
        </form>

        <p className="signup-text">
          Don't have an account?{" "}
          <Link to="/register" className="login-link">
            Create account
          </Link>
        </p>
      </div>
    </div>
  );
}
