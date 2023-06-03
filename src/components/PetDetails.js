import "../styles/Details.css"
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { auth, db} from "../firebase";
import { onSnapshot, query, collection, addDoc, getDocs, where } from "firebase/firestore";
import { initializeApp } from 'firebase/app';
import {v4 as uuid4} from 'uuid';

const PetDetails = ({onClose, open}) => {
  const [user, loading, error] = useAuthState(auth);
  const [userDocId, setUserDocId] = useState(''); 
  const [dogDocId, setDogDocId] = useState('');
  const [dogname, setDogName] = useState('');
  const [dogbreed, setDogBreed] = useState('');
  const [dogage, setDogAge] = useState(0);
  const [doggender, setDogGender] = useState('');
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    navigate("/petbio");
  }

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
      const q = query(collection(db, "users", userDocId, 'dogs'), where("dogname", "==", dogname));
      onSnapshot(q, (snapshot) => {
        if (!snapshot.empty) {
            snapshot.docs.forEach((doc) => {
            setDogDocId(doc.id);
            console.log(doc.data().dogId);
          });
        };
      });
    } catch(err) {
        console.log("");
    }
  }, [user]);
 

  const useSubmit = async () => {

    try {
        const dogUUID = uuid4();
        await addDoc(collection(db, 'users', userDocId, 'dogs'), {
        dogId: dogUUID,
        dogname: dogname,
        dogage: dogage,
        dogbreed: dogbreed,
        doggender: doggender, });
    } catch (err) {
        alert(err);
    }
  }



  return (
    <div className="detailbody">
      <meta charSet="utf-8" />
      <title>Pet Details</title>
      <form onSubmit={handleSubmit}>
      <div className="container">
        <div className="title-container">
          <a href="humandetails"><img className="back" src="image/back.png" /></a>
          <div className="steps">
            <div className="step-container">
              <div className="numinactive">1</div>
              <div className="titleinactive">Owner Profile</div>
            </div>
            <div className="step-container">
              <div className="numactive">2</div>
              <div className="titleactive">Pet Details</div>
            </div>
            <div className="step-container">
              <div className="numinactive">3</div>
              <div className="titleinactive">Pet Bio</div>
            </div>
          </div>
          <a href="home"><img className="logonamedetails" src="image/logoname.png" /></a>
        </div>
        <div className="line" />
        <div className="info-container">
          <div className="dogname">Name</div>
          <input type="text" id="dname" name="dname" placeholder="Dog's Name" onChange={(e) => setDogName(e.target.value)} required  />
          <div className="breed">Breed</div>
          <input type="text" id="dbreed" name="dbreed" placeholder="Dogs's Breed"  onChange={(e) => setDogBreed(e.target.value)} required />
          <div className="age">Age</div>
          <input type="text" id="dage" name="dage" placeholder="Dog's Age" onChange={(e) => setDogAge(e.target.value)} required  />
        </div>
        <div className="info-container2">
          <div className="gender">Gender</div>
          <div className="pgender-box">
            <label>
              <input type="radio" name="gender" defaultValue="male" onChange={(e) => setDogGender(e.target.value)} required  />
              <span>Male</span>
            </label>
            <label>
              <input type="radio" name="gender" defaultValue="female" onChange={(e) => setDogGender(e.target.value)} required />
              <span>Female</span>
            </label>
          </div>
          <div className="dpicture">
            <div className="pic"><img className="camera" src="image/camera.png" /></div>
            <div className="upload">Upload Photo</div>
          </div>
          <a href="petbio"><button className="buttondetails" onClick={useSubmit} >Next</button></a> 
        </div>
      </div>
      </form>
    </div>
  );
};

export default PetDetails