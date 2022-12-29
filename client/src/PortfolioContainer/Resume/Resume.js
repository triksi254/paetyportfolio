import React from "react";
import ScreenHeading from "../../Utilities/SubHeading/ScreenHeading";
import ScrollService from "../../Utilities/ScrollService";
import Animations from "../../Utilities/Animations";
import { useState } from "react";
import "./Resume.css";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"> </div>{" "}
          <span> {props.heading ? props.heading : ""} </span>{" "}
          <div className="resume-sub-heading">
            <span> {props.subHeading ? props.subHeading : ""} </span>{" "}
          </div>{" "}
          <div className="resume-heading-description">
            <span> {props.description ? props.description : ""} </span>{" "}
          </div>{" "}
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {" "}
              {props.fromDate + "-" + props.toDate}{" "}
            </div>
          ) : (
            <div> </div>
          )}{" "}
        </div>{" "}
      </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Soft Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interest.svg" },
  ];

  const programmingSkillDetails = [
    { skill: "Microsoft Office", ratingPercentage: 75 },
    { skill: "Google suite of products", ratingPercentage: 77 },
    { skill: "Social media", ratingPercentage: 86 },
    { skill: "SEO", ratingPercentage: 90 },
    { skill: "Email Marketing", ratingPercentage: 85 },
    { skill: "Phone Skills", ratingPercentage: 95 },
    { skill: "Content Writing", ratingPercentage: 80 },
  ];

  const projectsDetails = [
    {
      title: "User Research",
      // duration:{fromDate:"2022", toDate:"2022"},
      description:
        "2022-Part of the Viamo team that conducted user research study in Nyanza, Bungoma, Kiambu, and Nairobi for a product dubbed 321 that was meant to be launched in Kenya",
      subHeading: "321 Product Manager",
    },
    {
      title: "Voter Registration",
      // duration:{fromDate:"2022", toDate:"2022"},
      description:
        "2022-Undertook voter Registration in Kenya in preparation for the General Elections",
      subHeading: "Voter Registration Clerk",
    },
    {
      title: "General Elections, Kenya",
      // duration:{fromDate:"2022", toDate:"2022"},
      description:
        "2022-Part of the team that oversaw a fair and credible General Election in Kenya ",
      subHeading: "Presiding Officer",
    },
    {
      title: "Hull City In Kenya",
      // duration:{fromDate:"2018", toDate:"2018"},
      description:
        "2018-In partnership with SportPesa, we were able to coach grassroot teams and mentor local teams on mental health awareness",
      subHeading: "Incharge of PR and Advertising",
    },
    {
      title: "Everton In Kenya",
      // duration:{fromDate:"2018", toDate:"2018"},
      description:
        "2018-Took part in organizing and hosting everton players in Kenya for their game with Kariobangi Sharks in Kasarani Stadium",
      subHeading: "Incharge of PR and Advertising",
    },
    {
      title: "She Rule",
      // duration:{fromDate:"2018", toDate:"2018"},
      description:
        "2018-SportPesa decided to honor all women on womens day. The campaign dubbed the organization gain more than 20,000 more followers ",
      subHeading: "Social Media Manager",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Daystar University"}
        subHeading={"MASTERS DEGREE CORPORATE COMMUNICATION"}
        fromDate={"2019"}
        toDate={"2022"}
      />{" "}
      <ResumeHeading
        heading={"MultiMedia University"}
        subHeading={"BACHELOR OF MASS COMMUNICATION (PR MAJOR)"}
        fromDate={"2011"}
        toDate={"2015"}
      />{" "}
      <ResumeHeading
        heading={"Mahiga Girls' High School"}
        subHeading={"HIGH SCHOOL"}
        fromDate={"2011"}
        toDate={"2007"}
      />{" "}
    </div>,
    <div className="resume-screen-container" key="work-experience">
      <ResumeHeading
        heading={"Upwork · Freelance, Remote"}
        subHeading={"PUBLIC RELATIONS ASSISTANT"}
        fromDate={"2022"}
        toDate={"present"}
      />{" "}
      <ResumeHeading
        heading={"Paety Time Wines and Spirits · Part-time, Kenya "}
        subHeading={"CEO"}
        fromDate={"2020"}
        toDate={"present"}
      />{" "}
      <ResumeHeading
        heading={"IEBC ,Kenya"}
        subHeading={"VOTER REGISTRATION CLERK"}
        fromDate={"2022"}
        toDate={"2022"}
      />{" "}
      <ResumeHeading
        heading={"David Engineering, Kenya"}
        subHeading={"COMMUNICATION OFFICER"}
        fromDate={"2021"}
        toDate={"2021"}
      />{" "}
      <ResumeHeading
        heading={"Viamo · Full-time"}
        subHeading={"321 PRODUCT MANAGER"}
        fromDate={"2021"}
        toDate={"2022"}
      />{" "}
      <ResumeHeading
        heading={"Pevans East Africa LTD"}
        subHeading={"PR and ADVERTISING EXECUTIVE"}
        fromDate={"2015"}
        toDate={"2019"}
      />{" "}
      <ResumeHeading
        heading={"Forward Vision Communications LTD"}
        subHeading={"EMPLOYEE RELATIONS"}
        fromDate={"2014"}
        toDate={"2015"}
      />{" "}
      <div className="experience-description">
        <span className="resume-description-text">
          -Identify top bloggers, editors and contributing authors in the genre
          of target audience{" "}
        </span>{" "}
        <br />
        <span className="resume-description-text">
          -Extended my leadership and interpersonal skills to the growth of the
          business.{" "}
        </span>{" "}
        <br />
        <span className="resume-description-text">
          -Partnered with sales team to create contract - winning proposals for
          current and prospective clients.{" "}
        </span>{" "}
        <br />
        <span className="resume-description-text">
          -Developed and implemented communication strategies for different
          communication campaigns while optimizing advertising strategies for
          varying audiences and channels.{" "}
        </span>{" "}
        <br />
        <span className="resume-description-text">
          -Engaged with key stakeholders to ensure that they saw continued value
          in the Service.{" "}
        </span>{" "}
      </div>{" "}
    </div>,
    <div className="resume-screen-container" key="programming-skills">
      {" "}
      {programmingSkillDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"> </div> <span> {skill.skill} </span>{" "}
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage"
            ></div>{" "}
          </div>{" "}
        </div>
      ))}{" "}
    </div>,
    <div className="resume-screen-container" key="projects">
      {" "}
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          keys={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          //    fromDate={projectsDetails.duration.fromDate}
          //    toDate={projectsDetails.duration.toDate}
        />
      ))}{" "}
    </div>,
    <div className="resume-screen-container" key="interest">
      <ResumeHeading
        heading="Travelling"
        description="I love adventure and getting to discover new places."
      />
      <ResumeHeading
        heading="Networking"
        description="Am an extrovert and meeting new people is better than life itself for me"
      />
      <ResumeHeading
        heading="Reading Christian Books"
        description="There is nothing I find more fulfilling than a good Christian book that nourishes my soul"
      />
      <ResumeHeading
        heading="Planning and Attending Events"
        description="Where better to meet new people than an event you have took part in tailoring?"
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;
    let newCarousalOffSet = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };
    setCarousalOffSetStyle(newCarousalOffSet);
    setSelectedBulletIndex(index);
  };
  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label"> {bullet.label} </span>{" "}
      </div>
    ));
  };

  const getResumeScreen = () => {
    return (
      <div
        style={carousalOffSetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}{" "}
      </div>
    );
  };
  return (
    <div className="resume-container screen-container fade-in" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />{" "}
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"> </div>{" "}
              <div className="bullets"> {getBullets()} </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="resume-bullet-details"> {getResumeScreen()} </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
