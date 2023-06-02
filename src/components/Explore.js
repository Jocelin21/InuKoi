import React, { useState } from "react";
import "../styles/Match.css";
import "../styles/Explore.css";
import "../styles/Profile.css";

function Explore() {
  const [likeStatus, setLikeStatus] = useState({
    post1: false,
    post2: false,
    post3: false,
  });

  const [likeCount, setLikeCount] = useState({
    post1: 210,
    post2: 230,
    post3: 310,
  });

  const handleLikeClick = (postId) => {
    setLikeStatus((prevStatus) => ({
      ...prevStatus,
      [postId]: !prevStatus[postId],
    }));
  
    setLikeCount((prevCounts) => ({
      ...prevCounts,
      [postId]: !likeStatus[postId] ? prevCounts[postId] + 1 : prevCounts[postId] - 1,
    }));
  };

  return (
    <div>
      <meta charSet="utf-8" />
      <title>InuKoi Profile</title>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n    body {\n        background: linear-gradient(179.73deg, #FFE8DC -19.57%, #FFDADA 122.72%);;\n    }\n",
        }}
      />
      <header>
        <div className="header-container">
          <a href="/">
            <img className="logonamematch" src="image/logoname.png" alt="Logo Name" />
          </a>
          <div className="nav">
            <a className="inactive" href="choose">
              Match
            </a>
            <a className="inactive" href="chat">
              Chat
            </a>
            <a className="active" href="explore">
              Explore
            </a>
          </div>
          <a href="profile">
            <img className="profilepic" src="image/profilepic.png" alt="Profile Picture" />
          </a>
        </div>
      </header>
      <div className="explore-container">
        <button className="addpost">
          Post
          <img className="padd" src="image/add.png" alt="Add Icon" />
        </button>
        <div className="explore-content">
          <div className="postprof">
            <img className="postprofpic" src="image/guypic.png" alt="Profile Picture" />
            <div className="profname">Ethan Anderson</div>
          </div>
          <div className="posttitle">Ai photography</div>
          <div className="postpic">
            <img className="postimg" src="image/post1.png" alt="Post Image" />
          </div>
          <div className="postfeature">
            <div className="like">
              <img
                className="likeicon"
                src={likeStatus.post1 ? "image/liked.png" : "image/like.png"}
                alt="Like Icon"
                onClick={() => handleLikeClick("post1")}
              />
              <div className="likenumber">{likeCount.post1} likes</div>
            </div>
            <div className="share">
              <img className="shareicon" src="image/share.png" alt="Share Icon" />
            </div>
          </div>
        </div>
        <div className="explore-content">
          <div className="postprof">
            <img className="postprofpic" src="image/girlpic.png" alt="Profile Picture" />
            <div className="profname">Lucy Mitchell</div>
          </div>
          <div className="posttitle">Field of flowers</div>
          <div className="postpic">
            <img className="postimg" src="image/post2.png" alt="Post Image" />
          </div>
          <div className="postfeature">
            <div className="like">
              <img
                className="likeicon"
                src={likeStatus.post2 ? "image/liked.png" : "image/like.png"}
                alt="Like Icon"
                onClick={() => handleLikeClick("post2")}
              />
              <div className="likenumber">{likeCount.post2} likes</div>
            </div>
            <div className="share">
              <img className="shareicon" src="image/share.png" alt="Share Icon" />
            </div>
          </div>
        </div>
        <div className="explore-content">
          <div className="postprof">
            <img className="postprofpic" src="image/postprof1.png" alt="Profile Picture" />
            <div className="profname">Mei Mei</div>
          </div>
          <div className="posttitle">Aki and Me!</div>
          <div className="postpic">
            <img className="postimg" src="image/post3.png" alt="Post Image" />
          </div>
          <div className="postfeature">
            <div className="like">
              <img
                className="likeicon"
                src={likeStatus.post3 ? "image/liked.png" : "image/like.png"}
                alt="Like Icon"
                onClick={() => handleLikeClick("post3")}
              />
              <div className="likenumber">{likeCount.post3} likes</div>
            </div>
            <div className="share">
              <img className="shareicon" src="image/share.png" alt="Share Icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;
