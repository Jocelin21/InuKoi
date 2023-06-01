
import "../styles/Match.css"

function Match1() {
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
        <div className="body-container">
          <div className="dog">
            <div className="name">Roku</div>
            <img className="doggender" src="image/male.png" />
          </div>
          <div className="doginfo">
            <img className="dogpic" src="image/dogpic1.png" />
            <img className="locicon" src="image/locationicon.png" />
            <div className="doginfo2">
              <div className="type">Shih Tzu</div>
              <div className="dogage">3 Yrs Old</div>
              <div className="location">Jakarta, Indonesia</div>
            </div>
          </div>
          <div className="desc">Is your name Surprise Quiz? Because you caught me off guard, and I can't stop thinking about you.</div>
          <div className="icon">
            <a href="match2"><button className="buttonmatch"><img className="reject" src="image/reject.png" /></button></a>
            {/*Case where you reject*/}
            <a href="match2"><button className="buttonmatch"><img className="accept" src="image/accept.png" /></button></a>
          </div>
        </div>
      </div>
    );
  }

export default Match1;