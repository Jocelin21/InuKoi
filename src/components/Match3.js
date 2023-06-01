import "../styles/Match.css"

function Match3() {
    return (
      <div>
        <meta charSet="utf-8" />
        <title>InuKoi</title>
        <link rel="stylesheet" href="styles/content.css" />
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
            <div className="name">Manis</div>
            <img className="doggender" src="image/female.png" />
          </div>
          <div className="doginfo">
            <img className="dogpic" src="image/dogpic3.png" />
            <img className="locicon" src="image/locationicon.png" />
            <div className="doginfo2">
              <div className="type">Siberian Husky</div>
              <div className="dogage">3 Yrs Old</div>
              <div className="location">Bandung, Indonesia</div>
            </div>
          </div>
          <div className="desc">Looking for other doggies to play tag with!</div>
          <div className="icon">
            <a href><button className="buttonmatch"><img className="reject" src="image/reject.png" /></button></a>
            {/*Play Case where you accept*/}
            <a href="gotmatch3"><button className="buttonmatch"><img className="accept" src="image/accept.png" /></button></a>
          </div>
        </div>
      </div>
    );
  }

export default Match3