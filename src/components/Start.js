import "../styles/Start.css"

function Start() {
    return (
      <div>
        <meta charSet="utf-8" />
        <title>Start Matching</title>
        <link rel="stylesheet" href="styles/welcome.css" />
        <img className="logoname" src="image/logoname.png" alt="" />
        <div className="message3">Ready to find your Pawmate?</div>
        <div className="message2">Start Matching Now!</div>
        <a href="match.html"><button className="Start">Match</button></a>
        <img className="dogslogo" src="image/dogslogo.png" />
      </div>
    );
  }
;

export default Start