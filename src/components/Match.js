import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import "../styles/Match.css";

function Match() {

    return (
      
      <div>
        <meta charSet="utf-8" />
        <title>InuKoi</title>
        <header>
          <div className="header-container">
            <a href="match"><img className="logoname" src="image/logoname.png" /></a>
            <div className="nav">
              <a className="active" href="/match">Match</a>
              <a className="inactive" href="/chat">Chat</a>
              <a className="inactive" href="/explore">Explore</a>            
            </div>
            <a href="profile.html">
              <img className="profilepic" src="image/profilepic.png" />
            </a>
          </div>
        </header>
        <div className="body-container">
          <div className="dog">
            <div className="name">Kopi</div>
            <img className="gender" src="image/gender.png" />
          </div>
          <div className="doginfo">
            <img className="dogpic" src="image/dogpic.png" />
            <img className="locicon" src="image/locationicon.png" />
            <div className="doginfo2">
              <div className="type">Shibu Inu</div>
              <div className="age">2 Yrs Old</div>
              <div className="location">Jakarta, Indonesia</div>
            </div>
          </div>
          <div className="desc">Romeo had Juliet, but I chews you to be my fur-ever love.</div>
          <div className="icon">
            <button><img className="reject" src="image/reject.png" /></button>
            <button><img className="accept" src="image/accept.png" /></button>
          </div>
        </div>
      </div>
    );
  };

export default Match