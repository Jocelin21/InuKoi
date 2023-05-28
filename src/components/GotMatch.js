import "../styles/Match.css";


function GotMatch() {
    return (
      <div>
        <meta charSet="utf-8" />
        <title>InuKoi</title>
        <header>
          <div className="header-container">
            <a href="/"><img className="logonamematch" src="image/logoname.png" /></a>
            <div className="nav">
              <a className="active" href="match">Match</a>
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
            <img className="dogpic" src="image/dogpic.png" />
            <img className="girlpic" src="image/girlpic.png" />
          </div>
          <div className="gmdog">
            <div className="name">Kopi</div>
            <img className="doggender" src="image/gender.png" />
          </div>
          <div className="gmdesc">Romeo had Juliet, but I chews you to be my fur-ever love.</div>
          <div className="gmicon">
            <button className="gmnavi"><img className="gmback" src="image/back.png" /></button>
            <a href="chat"><button className="gmnavig"><img className="gmchat" src="image/chat.png" /></button></a>
            <button className="gmnavi"><img className="gmnext" src="image/next.png" /></button>
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

export default GotMatch