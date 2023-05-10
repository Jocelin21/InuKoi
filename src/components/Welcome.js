import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Welcome.css";

function Welcome() {
    return (
      <div>
        <meta charSet="utf-8" />
        <title>Welcome to InuKoi</title>
        <link rel="stylesheet" href="styles/welcome.css" />
        <div className="message1">Welcome to</div>
        <img className="logoname" src="image/logoname.png" />
        <div className="message2">Create Your Dog’s Profile now</div>
        <a href="humandetails.html"><button className="Start">Start</button></a>
      </div>
    );
  };
export default Welcome