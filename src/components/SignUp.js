import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../firebase";
import "../styles/Login.css";

function SignUp() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/match", {replace:true});
  }, [user, loading]);

  return (
    <div>
      <meta charSet="utf-8" />
      <title>Sign Up</title>
      <Link rel="stylesheet" href="styles/authentication.css" />
      <div className="auth-container">
        <div className="auth2-container">
          <div className="username">Username</div>
          <input type="text" id="username" name="username" place value ={name}
          onChange ={(e) => setName(e.target.value)} holder="Enter your username" />
          <div className="mail">Email</div>
          <input type="email" id="email" name="email" value ={email}
          onChange ={(e) => setEmail(e.target.value)} placeholder="Enter your email address" />
          <div className="pass">Password</div>
          <input type="password" id="password" name="password" value ={password}
          onChange ={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
          <button className="buttonsignup" onClick={register}>Sign Up</button>
          <button className ="buttonsignup" onClick ={signInWithGoogle}>Register with Google</button>
          <p className="signmessage">Already have an account? <a href="login" className="bold-italic">Login</a> now!</p>
        </div>
      </div>
    </div>
  );
};

export default SignUp