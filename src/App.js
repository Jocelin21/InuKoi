
import SignUp from "./components/SignUp"
import Dashboard from "./components/Dashboard"
import Reset from "./components/Reset"
//uncomment down below to see other pages
//fixed image hierarchy
import Preference from "./components/Preference"
import Match from "./components/Match";
import GotMatch  from "./components/GotMatch";
import Start from "./components/Start";
import HumanProfile from "./components/HumanProfile";
import PetBio from "./components/PetBio";
import PetDetails from "./components/PetDetails";
import Login from "./components/Login"
import Welcome from "./components/Welcome"
import Chat from "./components/Chat"
import Choose from "./components/Choose"
import Home from "./components/Home"
import Explore from "./components/Explore"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
    return (
      
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} /> 
          <Route exact path="/reset" element={<Reset/>} />
          {/* uncomment down below to see the other pages */}
          {/* preference nya ngaco*/}
          <Route exact path="/explore" element={<Explore/>} />
          <Route exact path="/preference" element={<Preference/>} />
          <Route exact path="/humandetails" element={<HumanProfile />} /> 
          <Route exact path="/petdetails" element={<PetDetails />} /> 
          <Route exact path="/petbio" element={<PetBio />} /> 
          <Route exact path="/start" element={<Start />} />
          <Route exact path="/match" element={<Match />} />
          <Route exact path="/choose" element={<Choose />}/>
          <Route exact path="/chat" element={<Chat />} />
          <Route exact path="/gotmatch" element={<GotMatch/>}/>
          <Route exact path="/welcome" element={<Welcome/>} />
          <Route exact path="/dashboard" element={<Dashboard/>} />
  
        </Routes>
      </Router>
    </div>
    )
  }

export default App;