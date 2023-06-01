
import "../styles/Match.css"
import "../styles/Chat.css"

function PlayChat() {
    return (
      <div>
        <meta charSet="utf-8" />
        <title>InuKoi</title>
        <header>
          <div className="header-container">
            <a href="/"><img className="logonamematch" src="image/logoname.png" /></a>
            <div className="nav">
              <a className="inactive" href="choose">Match</a>
              <a className="active" href="chat">Chat</a>
              <a className="inactive" href="explore">Explore</a>            
            </div>
            <a href="profile">
              <img className="profilepic" src="image/profilepic.png" />
            </a>
          </div>
        </header>
        <div className="hchat-container">
          <div className="hchat-top">
            <div className="hchattitle">Contact</div>
            <div className="search-container">
              <input type="text" id="srch" name="srch" placeholder="Search" />
              <img className="search" src="image/search.png" />
            </div>
          </div>
          <div className="hchat-filter">
            <div className="hchatfil">
              <a href="chat"><div className="hchattype">All</div></a>
              <div className="nohchatline" />
            </div>
            <div className="hchatfil">
              <a href="lovechat"><div className="hchattype">Love</div></a>
              <div className="nohchatline" />
            </div>
            <div className="hchatfil">
              <a href="playchat"><div className="hchattype">Play</div></a>
              <div className="hchatline" />
            </div>
          </div>
          <div className="hchat-content">
            <div className="contact2">
              <div className="chpicset">
                <img className="chmate" src="image/ball.png" />
                <img className="chdogpic" src="image/dogpic3.png" />
                <img className="chgirlpic" src="image/girlpic2.png" />
              </div>
              <div className="chcontactinfo">
                <div className="chdog">
                  <a href="chat2"><div className="chname">Manis</div></a>
                  <img className="chgender" src="image/female.png" />
                </div>
                <div className="chlastmsg">Hi my name’s Hori, I’m looking for a playmate for my dog Manis!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default PlayChat