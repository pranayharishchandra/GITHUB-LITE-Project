import React from 'react'
import './style/user.css'
// import PRANAY_HARAISHCHANDRA from '../images/PRANAY_HARAISHCHANDRA.jpg'
import githubIcon from '../images/githubIcon.png'
import { useNavigate } from "react-router-dom"; // Change this import

function About() {

  const navigate = useNavigate(); // Change this line

  function redirectToNewRoute() {
    navigate("/user/pranayharishchandra"); // Use 'navigate' from 'useNavigate'
  }

  return (
    <div className="card" style={{ width: '80vw', height: '60vh', opacity: '.84', margin: 'auto' }}>
      <div className="card-details">

        <div className='user-name-pic' style={{ width: '130%', margin: '-10%', height: '100px' }}>
          <img src={githubIcon} alt='' style={{objectFit:'cover'}}/>
          <p className="text-title">ABOUT GITHUB-LITE</p>
          {/* <p className="text-title">PRANAY HARISHCHANDRA</p> */}
        </div>

        <div className="card-description" style={{ overflow: 'show' }}>
          

          <p>Welcome to our Web App! Here, you can search for users by their usernames and explore their profiles.  </p>
          <p>Discover details like the number of followers, following, and repositories.</p>
          <p>Stay up-to-date with their latest repositories and more.</p>
          <p></p>
          <p className="text-body" style={{ cursor: 'pointer'}}>  Version: 1.0.1v  </p>

        </div>
      </div>

      <button className="card-button" onClick={redirectToNewRoute} style={{ cursor: 'pointer' }}>
        VISIT DEVELOPER'S  PROFILE
      </button>
    </div>
  );
}

export default About
