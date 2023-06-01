
import "../styles/Choose.css"
import "../styles/Match.css"

function Choose () {
    return (
      <div>
        <meta charSet="utf-8" />
        <title>InuKoi</title>
        <div className="choose-body">
          <header>
            <div className="header-container">
              <a href="/"><img className="logonamematch" src="image/logoname.png" /></a>
              <div className="nav">
                <a className="active" href="choose">Match</a>
                <a className="inactive" href="chat">Chat</a>
                <a className="inactive" href="explore">Explore</a>            
              </div>
              <a href="profile">
                <img className="profilepic" src="image/profilepic.png" />
              </a>
            </div>
          </header>
          <div className="choose-container">
            <div className="circle1">
              <div className="choosetxt">Choose</div>
              <div className="circle2">
                <div className="chooselove">
                  <div className="choosetitle">Love</div>
                  <img className="chooseicon" src="image/love.png" />
                  <a href="match1"><button className="chooseselect">Select</button></a>
                </div>
                <div className="choosepref">
                  <div className="editpreftxt">Edit Your Preferences</div>
                  <a href="preference"><button className="chooseedit">Edit</button></a>
                  <div className="circle3" />
                </div>
                <div className="chooseplay">
                  <div className="choosetitle">Play</div>
                  <img className="chooseicon" src="image/play.png" />
                  <a href="match3"><button className="chooseselect">Select</button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default Choose 