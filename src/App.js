import Home from "./components/Home"
import SignUp from "./components/SignUp"
import Login from "./components/Login";
import Match from "./components/Match"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    return (
      
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} /> 
          <Route exact path="/match" element={<Match />} />


        </Routes>
      </Router>
    </div>
    )
  }

    export default App;