import "../styles/Details.css"
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { auth, db} from "../firebase";
import { onSnapshot, query, collection, addDoc, getDocs, where } from "firebase/firestore";
import { initializeApp } from 'firebase/app';
import {v4 as uuid4} from 'uuid';

const HumanProfile = ({onClose, open}) => {
  const [user, loading, error] = useAuthState(auth);
  const [userDocId, setUserDocId] = useState(''); 
  const [humanDocId, setHumanDocId] = useState('');
  const [fullname, setFullName] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [dob, setDob] = useState();
  const [gender, setGender] = useState();
  const navigate = useNavigate();

      

  useEffect(() => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      onSnapshot(q, (snapshot) => {
        if (!snapshot.empty) {
          snapshot.docs.forEach((doc) => {
            setUserDocId(doc.id);
            console.log(doc.data())
          })
        }
      });
    } catch(err) {
      console.log("");
    }
  }, [user]);
  

  useEffect(() => {
    try {
      const q = query(collection(db, "users", userDocId, 'humans'), where("fullname", "==", fullname));
      onSnapshot(q, (snapshot) => {
        if (!snapshot.empty) {
            snapshot.docs.forEach((doc) => {
            setHumanDocId(doc.id);
            console.log(doc.data().humanId);
          });
        };
      });
    } catch(err) {
        console.log("");
    }
  }, [user]);
 

  const useSubmit = async (e) => {
    e.preventDefault()

    try {
        const itemUUID = uuid4();
        await addDoc(collection(db, 'users', userDocId, 'humans'), {
        humanId: itemUUID,
        fullname: fullname,
        country: country,
        city: city,
        dob: dob,
        gender: gender, });
    } catch (err) {
        alert(err);
    }
  }



  

    return (
      <div>
        <meta charSet="utf-8" />
        <title>Owner Profile</title>
        <form>

        <div className="container">
          <div className="title-container">
            <a href="login"><img className="back" src="image/back.png" /></a>
            <div className="steps">
              <div className="step-container">
                <div className="numactive">1</div>
                <div className="titleactive">Owner Profile</div>
              </div>
              <div className="step-container">
                <div className="numinactive">2</div>
                <div className="titleinactive">Pet Details</div>
              </div>
              <div className="step-container">
                <div className="numinactive">3</div>
                <div className="titleinactive">Pet Bio</div>
              </div>
            </div>
            <a href="/"><img className="logonamedetails" src="image/logoname.png" /></a>
          </div>
          <div className="line" />
      
          <div className="info-container">
            <div className="ownername">Name</div>
            <input type="text" id="oname" name="oname" placeholder="Owner's Name" onChange={(e) => setFullName(e.target.value)} required />
            <div className="birth">Date of Birth</div>
            <input type="date" id="birth" name="birth" onChange={(e) => setDob(e.target.value)} required />
            
            <div className="gender">Gender</div>
            <div className="gender-box">
              <label>
                <input type="radio" name="gender" defaultValue="male" onChange={(e) => setGender(e.target.value)} required />
                <span>Male</span>
              </label>
              <label>
                <input type="radio" name="gender" defaultValue="female" onChange={(e) => setGender(e.target.value)} required  />
                <span>Female</span>
              </label>
              <label>
                <input type="radio" name="gender" defaultValue="other" onChange={(e) => setGender(e.target.value)} required/>
                <span>Other</span>
              </label>
            </div>
          </div>
          
          <div>
          <div className="info-container2">
            <div className="country">Country</div>
            <input type="text" id="ocountry" name="ocountry" placeholder="Chosen Country" onChange={(e) => setCountry(e.target.value)} required/>
            <div className="city">City</div>
            <input type="text" id="ocity" name="ocity" placeholder="Chosen City" onChange={(e) => setCity(e.target.value)} required/>
            <div className="picture">
              <div className="pic"><img className="camera" src="image/camera.png" /></div>
              <div className="upload">Upload Photo</div>
              </div>
            </div>
            <a href= "/petdetails"> <button className="buttondetails"  onClick={useSubmit}>Next</button></a>
            
          </div>
          </div>
          </form>
        </div>
        
        

    );
    }


export default HumanProfile