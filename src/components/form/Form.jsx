import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import "../../assets/style/form.scss";
import Layout from "../../components/layout/Layout";
import loginSlice from "../redux/login/loginSlice";
import { Register } from "./Register";

export default function Form(props) {
  const dispatch = useDispatch();
  let [authMode, setAuthMode] = useState("signin");
  const [emailLog, setEmailLog] = useState("");
  const [passwordLog, setPasswordLog] = useState("");

  const [login, setLogin] = useState(false);
  const navigate = useNavigate();

  function handleLogin(e) {
    dispatch(loginSlice.actions.handleLogin());
    // localStorage.setItem("")
    e.preventDefault();
    let mail = localStorage.getItem("Email");

    let pass = localStorage.getItem("Password");
    console.log("email", mail, pass);

    if (!emailLog || !passwordLog) {
      alert("Không được để trống");
    }
    if (passwordLog === pass && emailLog === mail) {
      setLogin(true);
      navigate("/");
    }
    if (passwordLog > 0 && passwordLog !== pass) {
      alert("Sai email or password");
    }
  }
  useEffect(() => {});
  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  if (authMode === "signin") {
    return (
      <Layout>
        <Outlet />

        <div className="Auth-form-container" onSubmit={handleLogin}>
          <form className="Auth-form">
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Sign In</h3>
              <div className="text-center">
                Not registered yet?{" "}
                <span className="link-primary" onClick={changeAuthMode}>
                  Sign Up
                </span>
              </div>
              <div className="form-group mt-3">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="Enter email"
                  onChange={(e) => setEmailLog(e.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Enter password"
                  onChange={(e) => setPasswordLog(e.target.value)}
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={handleLogin}
                >
                  Submit
                </button>
              </div>
              <p className="text-center mt-2">
                Forgot <a href="#">password?</a>
              </p>
            </div>
          </form>
        </div>
      </Layout>
    );
  }

  return <Register />;
}
