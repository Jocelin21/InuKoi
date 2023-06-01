
import SignUp from "./components/SignUp"
import Dashboard from "./components/Dashboard"
import Reset from "./components/Reset"
//uncomment down below to see other pages
//fixed image hierarchy
import Preference from "./components/Preference"
import Match from "./components/Match";
import Match1 from "./components/Match1";
import Match2 from "./components/Match2";
import Match3 from "./components/Match3";
import GotMatch  from "./components/GotMatch";
import GotMatch2  from "./components/GotMatch2";
import GotMatch3  from "./components/GotMatch3";
import Start from "./components/Start";
import HumanProfile from "./components/HumanProfile";
import PetBio from "./components/PetBio";
import PetDetails from "./components/PetDetails";
import Login from "./components/Login"
import Welcome from "./components/Welcome"
import Chat from "./components/Chat"
import Chat1 from "./components/Chat1"
import Chat2 from "./components/Chat2"
import PlayChat from "./components/PlayChat"
import LoveChat from "./components/LoveChat"
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
          <Route exact path="/match1" element={<Match1 />} />
          <Route exact path="/match2" element={<Match2/>} />
          <Route exact path="/match3" element={<Match3 />} />
          <Route exact path="/choose" element={<Choose />}/>
          <Route exact path="/chat" element={<Chat />} />
          <Route exact path="/chat1" element={<Chat1 />} />
          <Route exact path="/chat2" element={<Chat2 />} />
          <Route exact path="/playchat" element={<PlayChat/>} />
          <Route exact path="/lovechat" element={<LoveChat/>} />
          <Route exact path="/gotmatch" element={<GotMatch/>}/>
          <Route exact path="/gotmatch2" element={<GotMatch2/>}/>
          <Route exact path="/gotmatch3" element={<GotMatch3/>}/>
          <Route exact path="/welcome" element={<Welcome/>} />
          <Route exact path="/dashboard" element={<Dashboard/>} />
  
        </Routes>
      </Router>
    </div>
    )
  }

export default App;