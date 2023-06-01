import "../styles/Match.css"

function GotMatch2() {
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
            <img className="dogpic" src="image/dogpic2.png" />
            <img className="girlpic" src="image/guypic2.png" />
          </div>
          <div className="gmdog">
            <div className="name">Brownie</div>
            <img className="doggender" src="image/male.png" />
          </div>
          <div className="gmdesc">Let’s fall head over paws for each other :)</div>
          <div className="gmicon">
            <a href="gotmatch"><button className="gmnavi"><img className="gmback" src="image/back.png" /></button></a>
            <a href><button className="gmnavig"><img className="gmchat" src="image/chat.png" /></button></a>
            <a href="gotmatch"><button className="gmnavi"><img className="gmnext" src="image/next.png" /></button></a>
          </div>
        </div>
        <div className="recentcontact">
          <div className="sidetitle">Recent Chat</div>
          <div className="sidecontent">
            <div className="sidecap1">It's still empty</div>
            <img className="nochat" src="image/nochat.png" />
            <div className="sidecap2">start chatting with one</div>
          </div>
        </div>
      </div>
    );
  }

export default GotMatch2