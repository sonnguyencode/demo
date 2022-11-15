import React, { useRef, useState } from "react";
import Form from "./Form";

export const Register = () => {
  let [authMode, setAuthMode] = useState("signin");
  const name = useRef();
  const email=useRef();
  const password=useRef();
  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("Hãy điền đầy đủ thông tin")
      setFlag(false);
    } else {
      setFlag(false);
      localStorage.setItem("Email", email.current.value);
        localStorage.setItem("Password",password.current.value);
        localStorage.setItem("Name",name.current.value);
        console.log("saved in local",email,password,name);
        alert("Đăng lý thành công")
      
    }
  }

  const changeAuthMode = () => {
    setAuthMode(authMode === "signup" ? "signin" : "signup");
  };
  if (authMode === "signin") {
    return (
      <div>
        <div className="Auth-form-container" onSubmit={handleSubmit}>
          <form className="Auth-form">
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Sign In</h3>
              <div className="text-center">
                Already registered?{" "}
                <span className="link-primary" onClick={changeAuthMode}>
                  Sign In
                </span>
              </div>
              <div className="form-group mt-3">
                <label>Full Name</label>
                <input required
                  type="text"
                  className="form-control mt-1"
                  placeholder="e.g Jane Doe"
                  ref={name}
                  // onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <label>Email address</label>
                <input required
                  type="email"
                  className="form-control mt-1"
                  placeholder="Email Address"
                  // onChange={(e) => setEmail(e.target.value)}
                  ref={email}
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input required
                  type="password"
                  className="form-control mt-1"
                  placeholder="Password"
                  // onChange={(e) => setPassword(e.target.value)}
                  ref={password}
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
              <p className="text-center mt-2">
                Forgot <a href="#">password?</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    );
  }
  return (<Form />);
};
