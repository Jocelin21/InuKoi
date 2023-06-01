import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "../styles/Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) navigate("/dashboard");
  }, [user, loading]);

  return (
    <div>
      {/* <style>
        body {
            background: url("../authenticationbg.png";)
        }
      </style> */}
      <meta charSet="utf-8" />
      <title>Sign In</title>
      <Link rel="stylesheet" href="styles/authentication.css" />
      <div className="auth-container">
        <div className="auth2-container">
          <div className="mail">Email</div>
          <input type="email" id="email" name="email" value ={email} 
          onChange ={(e) => setEmail(e.target.value)} placeholder="Enter your email address" />
          <div className="pass">Password</div>
          <input type="password" id="password" name="password" value ={password}
          onChange ={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
          <a href="reset" className="forgotcap">Forgot Password</a>
          <button className="buttonlogin" onClick ={() => logInWithEmailAndPassword(email, password)}>Log in</button>
          <button className ="buttonlogingoog" onClick={signInWithGoogle}>Login with Google</button>
          <p className="signmessage">Don’t have an account yet? <a href="signup" className="bold-italic">Sign up</a> now!</p>
        </div>
      </div>
    </div>
  );
};

export default Login