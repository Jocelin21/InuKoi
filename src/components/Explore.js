import "../styles/Match.css"
import "../styles/Explore.css"
import "../styles/Profile.css"

function Explore() {
  return (
    <div>
      <meta charSet="utf-8" />
      <title>InuKoi Profile</title>
      <style dangerouslySetInnerHTML={{__html: "\n    body {\n        background: linear-gradient(179.73deg, #FFE8DC -19.57%, #FFDADA 122.72%);;\n    }\n" }} />
      <header>
        <div className="header-container">
          <a href="/"><img className="logonamematch" src="image/logoname.png" /></a>
          <div className="nav">
            <a className="inactive" href="choose">Match</a>
            <a className="inactive" href="chat">Chat</a>
            <a className="active" href="explore">Explore</a>            
          </div>
          <a href="profile">
            <img className="profilepic" src="image/profilepic.png" />
          </a>
        </div>
      </header>
      <div className="explore-container">
        <button className="addpost">Post<img className="padd" src="image/add.png" /></button>
        <div className="explore-content">
          <div className="postprof">
            <img className="postprofpic" src="image/guypic.png" />
            <div className="profname">Ethan Anderson</div>
          </div>
          <div className="posttitle">Ai photography</div>
          <div className="postpic"><img className="postimg" src="image/post1.png" /></div>
          <div className="postfeature">
            <div className="like">
              <img className="likeicon" src="image/like.png" />
              <div className="likenumber">210 likes</div>
            </div>
            <div className="share">
              <img className="shareicon" src="image/share.png" />
            </div>
          </div>
        </div>
        <div className="explore-content">
          <div className="postprof">
            <img className="postprofpic" src="image/girlpic.png" />
            <div className="profname">Lucy Mitchell</div>
          </div>
          <div className="posttitle">Field of flowers</div>
          <div className="postpic"><img className="postimg" src="image/post2.png" /></div>
          <div className="postfeature">
            <div className="like">
              <img className="likeicon" src="image/liked.png" />
              <div className="likenumber">230 likes</div>
            </div>
            <div className="share">
              <img className="shareicon" src="image/share.png" />
            </div>
          </div>
        </div>
        <div className="explore-content">
          <div className="postprof">
            <img className="postprofpic" src="image/postprof1.png" />
            <div className="profname">Mei Mei</div>
          </div>
          <div className="posttitle">Aki and Me!</div>
          <div className="postpic"><img className="postimg" src="image/post3.png" /></div>
          <div className="postfeature">
            <div className="like">
              <img className="likeicon" src="image/liked.png" />
              <div className="likenumber">310 likes</div>
            </div>
            <div className="share">
              <img className="shareicon" src="image/share.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// function Explore() {
//     return (
//       <div>
//         <meta charSet="utf-8" />
//         <title>InuKoi</title>
//         <header>
//           <div className="header-container">
//             <a href="/"><img className="logonamematch" src="image/logoname.png" /></a>
//             <div className="nav">
//               <a className="inactive" href="choose">Match</a>
//               <a className="inactive" href="chat">Chat</a>
//               <a className="active" href="explore">Explore</a>            
//             </div>
//             <a href="profile">
//               <img className="profilepic" src="image/profilepic.png" />
//             </a>
//           </div>
//         </header>
//         {'}'}
//       </div>
//     );
// }

export default Explore;