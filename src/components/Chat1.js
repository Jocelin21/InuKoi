import "../styles/Chat.css"
import "../styles/Match.css"

function Chat1() {
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
                <img className="ccmate" src="image/mate.png" />
                <img className="ccdogpic" src="image/dogpic.png" />
                <img className="ccgirlpic" src="image/girlpic.png" />
              </div>
              <div className="ccdog">
                <div className="ccname">Kopi</div>
                <img className="ccgender" src="image/male.png" />
              </div>
            </div>
          </div>
          <div className="chattings">
            <div className="user">Hey I’m Aqua, and Ai is my Shiba Inu.</div>
            <div className="user2">Heyy Aqua, I’m Ruby and the shiba you see in my pfp is Kopi!</div>
            <div className="user">Ooh he’s so adorable :o I bet the two of them will fall in love in no time.</div>
            <div className="user2">It’s been really hard to find another Shiba Inu in Jakarta, I’m glad I found one haha</div>
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

export default Chat1;