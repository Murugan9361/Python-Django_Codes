
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const[data,setData]=useState({
    username:"",
    email:"",
    password:""

  })

  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();

    // Connect your registration API here.
   let data={
        username:username,
        email:email,
        password:password
    }

    try {
        let postdata=await axios.post("http://localhost:8000/myapp/register/",data)

         if(postdata.status==201){
            alert("Registration Successfully")
            navigate("/")
         }
        
    } catch (error) {
        console.log(error)
        
    }
 


    

    
  };

  return (
    <div className="register-page">
      <style>{`
        * {
          box-sizing: border-box;
        }

        .register-page {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 24px;
          font-family: Arial, sans-serif;
          background: linear-gradient(
            135deg, #e0e7ff, #f5f3ff, #fdf2f8
          );
        }

        .register-card {
          width: 100%;
          max-width: 440px;
          padding: 36px 40px;
          background: rgba(255, 255, 255, 0.97);
          border: 1px solid rgba(255, 255, 255, 0.8);
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(49, 46, 129, 0.12);
        }

        .register-logo {
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

        .register-title {
          margin: 0;
          text-align: center;
          font-size: 28px;
          color: #1e1b4b;
        }

        .register-subtitle {
          margin: 10px 0 28px;
          text-align: center;
          color: #77778b;
          font-size: 14px;
          line-height: 1.6;
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
          background: white;
          color: #25253b;
          font-size: 14px;
          transition: 0.2s;
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
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
        }

        .register-button {
          width: 100%;
          height: 49px;
          margin-top: 4px;
          border: none;
          border-radius: 10px;
          background: linear-gradient(135deg, #6366f1, #7c3aed);
          color: white;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 0 8px 18px rgba(99, 102, 241, 0.22);
          transition: 0.2s;
        }

        .register-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 24px rgba(99, 102, 241, 0.3);
        }

        .register-footer {
          margin: 26px 0 0;
          text-align: center;
          color: #77778b;
          font-size: 14px;
        }

        .register-link {
          color: #6366f1;
          font-weight: 700;
          text-decoration: none;
        }

        .register-link:hover {
          text-decoration: underline;
        }

        @media (max-width: 480px) {
          .register-page {
            padding: 16px;
          }

          .register-card {
            padding: 30px 22px;
          }

          .register-title {
            font-size: 25px;
          }
        }
      `}</style>

      <div className="register-card">
        <div className="register-logo">L</div>

        <h1 className="register-title">Create Account</h1>
        <p className="register-subtitle">
          Sign up to get started with your account
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="username">
              Username
            </label>
            <input
              className="form-input"
              id="username"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="username"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="email">
              Email Address
            </label>
            <input
              className="form-input"
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
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
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="new-password"
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

          <button className="register-button" type="submit">
            Create Account →
          </button>
        </form>

        <p className="register-footer">
          Already have an account?{" "}
          <Link to="/" className="register-link">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
