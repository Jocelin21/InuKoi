import "../styles/Match.css"
import "../styles/Chat.css"

function GotMatch3() {
    return (
      <div>
        <meta charSet="utf-8" />
        <title>InuKoi</title>
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
        <div className="gm-container1">
          <div className="gmnotif">You matched with...</div>
          <div className="picset">
            <img className="dogpic" src="image/dogpic3.png" />
            <img className="girlpic" src="image/girlpic2.png" />
          </div>
          <div className="gmdog">
            <div className="name">Manis </div>
            <img className="doggender" src="image/female.png" />
          </div>
          <div className="gmdesc">Looking for other doggies to play tag with!</div>
          <div className="gmicon">
            <a href="gotmatch"><button className="gmnavi"><img className="gmback" src="image/back.png" /></button></a>
            <a href="chat2"><button className="gmnavig"><img className="gmchat" src="image/chat.png" /></button></a>
            <a href="gotmatch"><button className="gmnavi"><img className="gmnext" src="image/next.png" /></button></a>
          </div>
        </div>
        <div className="recentcontact">
          <div className="sidetitle">Recent Chat</div>
          <div className="side-container">
            <div className="contact1">
              <div className="cpicset">
                <img className="cmate" src="image/mate.png" />
                <img className="cdogpic" src="image/dogpic.png" />
                <img className="cgirlpic" src="image/girlpic.png" />
              </div>
              <div className="contactinfo">
                <div className="cdog">
                  <a href="chat1"><div className="cname">Kopi</div></a>
                  <img className="cgender" src="image/male.png" />
                </div>
                <div className="clastmsg">It's been really hard...</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default GotMatch3