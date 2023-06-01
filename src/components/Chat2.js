
import "../styles/Chat.css"
import "../styles/Match.css"

function Chat2() {
    return (
      <div>
        <meta charSet="utf-8" />
        <title>InuKoi</title>
        <link rel="stylesheet" href="styles/content.css" />
        <link rel="stylesheet" href="styles/chat.css" />
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
        <div className="chat-container">
          <div className="chattop">
            <div className="contacttitle">
              <div className="cpicset">
                <img className="ccmate" src="image/ball.png" />
                <img className="ccdogpic" src="image/dogpic3.png" />
                <img className="ccgirlpic" src="image/girlpic2.png" />
              </div>
              <div className="ccdog">
                <div className="ccname">Manis</div>
                <img className="ccgender" src="image/male.png" />
              </div>
            </div>
          </div>
          <div className="chattings">
            <div className="user2">Hi my name’s Hori, I’m looking for a playmate for my dog Manis!</div>
          </div>
          <div className="chatbottom">
            <img className="phoneicon" src="image/phoneicon.png" />
            <div className="chattype">
              <img className="add" src="image/add.png" /> 
              <input type="text" id="textsmtg" name="textsmtg" placeholder="Write something..." />
              <img className="send" src="image/send.png" />
            </div>
            <img className="mic" src="image/mic.png" />
          </div>
        </div>
        <div className="recentcontact">
          <div className="sidetitle">Recent Chat</div>
          <div className="side-container">
            <div className="contact1">
              <div className="cpicset">
                <img className="cmate" src="image/ball.png" />
                <img className="cdogpic" src="image/dogpic3.png" />
                <img className="cgirlpic" src="image/girlpic2.png" />
              </div>
              <div className="contactinfo">
                <div className="cdog">
                  <a href="chat2"><div className="cname">Manis</div></a>
                  <img className="cgender" src="image/female.png" />
                </div>
                <div className="clastmsg">Hi my name’s Hori, I’m looking for a playmate for my dog Manis!</div>
              </div>
            </div>
            <div className="contact2">
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
                <div className="clastmsg">It’s been really hard to find another Shiba Inu in Jakarta, I’m glad I found one haha</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default Chat2;