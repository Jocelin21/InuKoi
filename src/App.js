import Home from "./components/Home"
import SignUp from "./components/SignUp"
import Login from "./components/Login"

//uncomment down below to see other pages
//it starts getting weird the images, pls help

//import Welcome from "./components/Welcome"
// import HumanProfile from "./components/HumanProfile";
// import PetDetails from "./components/PetDetails";
// import PetBio from "./components/PetBio";
// import Start from "./components/Start";
// import Match from "./components/Match";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
    return (
      
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} /> 
          {/* uncomment down below to see the other pages */}

          {/* <Route exact path="/humandetails" element={<HumanProfile />} /> 
          <Route exact path="/petdetails" element={<PetDetails />} /> 
          <Route exact path="/petbio" element={<PetBio />} /> */}
          {/* <Route exact path="/start" element={<Start />} /> */}
          {/* <Route exact path="/match" element={<Match />} /> */}
          {/* <Route exact path="/welcome" element={<Welcome/>} /> */}
        </Routes>
      </Router>
    </div>
    )
  }

export default App;