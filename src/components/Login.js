import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "../styles/Login.css";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [user, loading, error] = useAuthState(auth);
  // const navigate = useNavigate();
  
  // useEffect(() => {
  //   if (loading) {
  //     return;
  //   }
  //   if (user) navigate("/");
  // }, [user, loading]);

  return (
      <div>
        <meta charSet="utf-8" />
        <title>Sign In</title>
        <link rel="stylesheet" href="styles/Login.css" />
        <div className="auth-container">
          <div className="auth2-container">
            <div className="mail">Email</div>
            <input type="email" id="email"  name="email"   placeholder="Enter your email address"/>
            <div className="pass">Password</div>
            <input type="password" id="password" name="password" placeholder="Enter your password" />
        
        <button className="login" onClick ={() => logInWithEmailAndPassword()} >Log in</button>
        <button className ="login__btn login__google" onClick={signInWithGoogle}>
          Login with Google
        </button>
        <div>
          <Link to ="/reset">Forgot Password</Link>
        </div>
            <p className="signmessage">Don’t have an account yet? <Link to="/signup" className="bold-italic">Sign up</Link> now!</p>
          </div>
        </div>
      </div>
    )
  };

export default Login;