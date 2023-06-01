
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import "../styles/Preference.css";

function Preference() {
      return (
        <div>
          <meta charSet="utf-8" />
          <title>Match Preferences</title>
          <link rel="stylesheet" href="styles/preference.css" />
          <div className="prefbody">
            <div className="prefcontainer">
              <div className="preftitle">Match Preferences</div>
              <div className="prefdesc">We would like to know your preferences before we help you match!</div>
              <div className="pbreed">Breed</div>
              <div className="pbreed-box">
                <label>
                  <input type="radio" name="type" defaultValue="any" />
                  <span>Any</span>
                </label>
                <label>
                  <input type="radio" name="type" defaultValue="mixed" />
                  <span>Mixed</span>
                </label>
                <label>
                  <input type="radio" name="type" defaultValue="same" />
                  <span>Same</span>
                </label>
              </div>
              <div className="plocation1">Location</div>
              <div className="plocationbox">
                <button className="ploccount">
                  <div className="select">Select Country</div>
                  <img className="prefdown" src="image/down.png" />
                </button>
                <button className="ploccity">
                  <div className="select">Select City</div>
                  <img className="prefdown" src="image/down.png" />
                </button> 
                <label>
                  <input type="checkbox" name="type" defaultValue="all" />
                  <span>All</span>
                </label>
              </div>
              <div className="preflow">
                <div className="modnotif">You can modify your preferences later from your profile.</div>
                <div className="prefleft">
                  <a href="choose"><img className="prefback" src="image/back.png" /></a>
                  <a href="choose"><button className="psave">Save</button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };

export default Preference;