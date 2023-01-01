import React from "react";
import Typical from "react-typical";
import "./Profile.css";
import ScrollService from "../../../Utilities/ScrollService";


export default function Profile() {
   
  
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/talona.sadiki">
                <i className="fa fa-facebook-square"> </i>{" "}
              </a>{" "}
              <a href="https://www.linkedin.com/in/patricia-w-b1369a92/">
                <i className="fa fa-linkedin-square"> </i>{" "}
              </a>{" "}
              <a href="https://www.instagram.com/paetyw/">
                <i className="fa fa-instagram"> </i>{" "}
              </a>{" "}
            </div>{" "}
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I 'M <span className="highlighted-text">
                Patricia
              </span>{" "}
            </span>{" "}
            <div className="profile-details-role">
              <span className="primary-text">
                {" "}
                <h1>
                  {" "}
                  <Typical
                    loop={Infinity}
                    steps={[
                      "Corporate Communications Expert 💬",
                      2000,
                      "Marketing and Advertising 💸",
                      2000,
                      "PR Consultant 💙",
                      2000,
                      "Product Manager 📈",
                      2000,
                    ]}
                  />{" "}
                </h1>{" "}
                <span className="profile-role-tagline">
                  Product Management | Corporate communications | Public
                  Relations | Advertising | E - mail Marketing | Social Media
                  marketing | Project Management | Business Development |
                </span>{" "}
              </span>{" "}
            </div>{" "}
            <div className="profile-options">
              <button
                className="btn primary-btn"
                onClick={()=> ScrollService.scrollHandler.scrollToHireMe()}
              >
                Hire Me
              </button>{" "}
              <a href="resume.pdf" download="Patricia resume.pdf">
                <button className="btn highlighted-btn"> Get Resume </button>{" "}
              </a>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="profile-picture">
          <div className="profile-picture-background"> </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
