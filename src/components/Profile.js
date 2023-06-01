import "../styles/Profile.css"
import "../styles/Match.css"
import "../styles/Details.css"
function Profile() {
    return (
      <div>
        <meta charSet="utf-8" />
        <title>InuKoi Profile</title>
        <style dangerouslySetInnerHTML={{__html: "\n    body {\n        background: linear-gradient(180deg, #FFE9DF 8.29%, #FFDEDE 44.33%, #FFDEDE 108.29%);\n    }\n" }} />
        <header>
          <div className="header-container">
            <a href="/"><img className="logonamematch" src="image/logoname.png" /></a>
            <div className="nav">
              <a className="inactive" href="choose">Match</a>
              <a className="inactive" href="chat">Chat</a>
              <a className="inactive" href="explore">Explore</a>            
            </div>
            <a href="profile">
              <img className="profilepic" src="image/profilepic.png" />
            </a>
          </div>
        </header>
        <div className="profile-container">
          <div className="profilecap">*This is how your profile will look like to others</div>
          <section id="profileview">
            <div className="sectiontitle">Profile Preview</div>
            <div className="profdoginfo">
              <div className="profdoginfo2">
                <div className="proftype">Shiba Inu</div>
                <div className="profloc">
                  <div className="proflocation">Jakarta, Indonesia</div>
                  <img className="proflocicon" src="image/locationicon.png" />
                </div>
              </div>
              <div className="profpicset">
                <img className="profdogpic" src="image/profilepic.png" />
                <img className="guypic" src="image/guypic.png" />
              </div>
              <div className="profage">2 Yrs Old</div>
            </div>
            <div className="profdog">
              <div className="profname">Ai</div>
              <img className="profgender" src="image/female.png" />
            </div>
            <div className="profdesc">I'll unleash my love for you &lt;3</div>
          </section>
          <section id="userprofile">
            <div className="sectiontitle">User Profile</div>
            <div className="userprof-container">
              <div className="sideline1" />
              <div className="userprof-container2">
                <div className="info-container">
                  <div className="ownname">Name</div>
                  <input type="text" id="oname" name="oname" placeholder="Owner's Name" defaultValue="Ethan Anderson" />
                  <div className="ownbirth">Date of Birth</div>
                  <input type="date" id="birth" name="birth" defaultValue="2000-01-01" />
                  <div className="owngender">Gender</div>
                  <div className="gender-box">
                    <label>
                      <input type="radio" name="ownergender" defaultValue="male" defaultChecked />
                      <span>Male</span>
                    </label>
                    <label>
                      <input type="radio" name="ownergender" defaultValue="female" />
                      <span>Female</span>
                    </label>
                    <label>
                      <input type="radio" name="ownergender" defaultValue="other" />
                      <span>Other</span>
                    </label>
                  </div>
                </div>
                <div className="info-container2">
                  <div className="owncountry">Country</div>
                  <input type="text" id="ocountry" name="ocountry" placeholder="Chosen Country" defaultValue="Indonesia" />
                  <div className="owncity">City</div>
                  <input type="text" id="ocity" name="ocity" placeholder="Chosen City" defaultValue="Jakarta" />
                </div>
              </div>
              <div className="userprof-container3">
                <img className="profcamera" src="image/guypic.png" />
                <button className="psavebutton">Save</button>
              </div>
            </div>
          </section>
          <section id="dogprofile">
            <div className="sectiontitle">Dog Profile</div>
            <div className="userprof-container">
              <div className="sideline2" />
              <div className="userprof-container2">
                <div className="info-container">
                  <div className="dgname">Name</div>
                  <input type="text" id="dname" name="dname" placeholder="Dog's Name" defaultValue="Ai" />
                  <div className="dgbreed">Breed</div>
                  <input type="text" id="dbreed" name="dbreed" placeholder="Dogs's Breed" defaultValue="Shiba Inu" />
                  <div className="dgage">Age</div>
                  <input type="text" id="dage" name="dage" placeholder="Dog's Age" defaultValue="3 Years" />
                </div>
                <div className="info-container2">
                  <div className="dggender">Gender</div>
                  <div className="pgender-box">
                    <label>
                      <input type="radio" name="doggender" defaultValue="male" />
                      <span>Male</span>
                    </label>
                    <label>
                      <input type="radio" name="doggender" defaultValue="female" defaultChecked />
                      <span>Female</span>
                    </label>
                  </div>
                </div>
                <div className="info-container3">
                  <div className="dbio">Bio</div>
                  <textarea id="dogbio" name="dogbio" placeholder="Write bio here" defaultValue={"I'll unleash my love for you <3"} />
                </div>
              </div>
              <div className="userprof-container3">
                <img className="profcamera" src="image/profilepic.png" />
                <button className="dsavebutton">Save</button>
              </div>
            </div></section>  
          <a href="/"><button className="logout">Log Out</button></a>
        </div>
      </div>
    );
  }

export default Profile