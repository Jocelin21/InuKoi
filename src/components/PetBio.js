import "../styles/Details.css"
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { auth, db} from "../firebase";
import { onSnapshot, query, collection, addDoc, getDocs, where } from "firebase/firestore";
import {v4 as uuid4} from 'uuid';

const PetBio = ({onClose, open}) => {
  const [user, loading, error] = useAuthState(auth);
  const [userDocId, setUserDocId] = useState(''); 
  const [dogbioDocId, setDogBioDocId] = useState('');
  const [dogbio, setDogBio] = useState('');
  const navigate = useNavigate();
  const [name, setName] = useState(" ");
  const [fullname, setFullName] = useState("")
  

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      // const qq= query(collection(db, "humans"), where("humanId", "==", human?.humanId))
      //get query of all users
      const doc = await getDocs(q);
      // const docc = await getDocs(qq);
      //first user data from all users
      const data = doc.docs[0].data();
      // const dataa = docc.docs[0].data()
      
      // setFullName(dataa.fullname);
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data!");
    }
  };
  
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName();
  }, [user, loading]);


  const handleSubmit = event => {
    event.preventDefault();
    navigate("/start");
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
      const q = query(collection(db, "users", userDocId, 'dogbios'), where("dogbio", "==", dogbio));
      onSnapshot(q, (snapshot) => {
        if (!snapshot.empty) {
            snapshot.docs.forEach((doc) => {
            setDogBioDocId(doc.id);
            console.log(doc.data().dogbioId);
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
        await addDoc(collection(db, 'users', userDocId, 'dogbios'), {
        dogId: dogUUID,
        dogbio: dogbio });
    } catch (err) {
        alert(err);
    }
  }

  return (
    <div>
      <meta charSet="utf-8" />
      <title>Pet Bio</title>
      <form onSubmit={handleSubmit}>
      <div className="container">
        <div className="title-container">
          <a href="petdetails"><img className="back" src="image/back.png" /></a>
          <div className="steps">
            <div className="step-container">
              <div className="numinactive">1</div>
              <div className="titleinactive">Owner Profile</div>
            </div>
            <div className="step-container">
              <div className="numinactive">2</div>
              <div className="titleinactive">Pet Details</div>
            </div>
            <div className="step-container">
              <div className="numactive">3</div>
              <div className="titleactive">Pet Bio</div>
            </div>
          </div>
          <a href="index.html"><img className="logonamedetails" src="image/logoname.png" /></a>
        </div>
        <div className="line" />
        <div className="info-container3">
          <div className="message1">Hello {name}!</div>
          <div className="message2">Fill in your dog’s bio,</div>
          <textarea type="text" id="bio" name="bio" onChange={(e) => setDogBio(e.target.value)} required placeholder="Write bio here">  </textarea> 
          <div className="info">You can edit this later</div>
          <a href="start"><button className="buttondetails" onClick={useSubmit}>Finish</button></a> 
        </div>
      </div>
      </form>
    </div>
  );
}

export default PetBio