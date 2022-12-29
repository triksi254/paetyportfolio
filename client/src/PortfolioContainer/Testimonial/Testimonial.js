import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ScreenHeading from "../../Utilities/SubHeading/ScreenHeading";
import ScrollService from "../../Utilities/ScrollService";
import Animations from "../../Utilities/Animations";
import David from "../../../src/assets/Testimonial/David.jpg";
import Hudson from "../../../src/assets/Testimonial/Hudson.jpg";
import mike from "../../../src/assets/Testimonial/mike.jpg";
import Mwirigi from "../../../src/assets/Testimonial/Mwirigi.jpg";
import Teresia_wachira from "../../../src/assets/Testimonial/Teresia_wachira.jpg";
import shape_bg from "../../../src/assets/Testimonial/shape-bg.png";

import "./Testimonial.css";

export default function Testimonial(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bouseInRight",
    animateOut: "bouseOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div>
      <ScreenHeading title={"Testimonial"} subHeading={"Proof Of My Works"} />{" "}
      <section className="testimonial-section fade-in" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="testimonial-carousel"
              {...options}
            >
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      Your management of the team has been unreal since taking
                      on that responsibility.The team all trust and respect you,
                      and rightly so.Alongside the continuous improvements of
                      reporting templates and content, smashing customer
                      delivery and event speaking sessions just shows how
                      invaluable you are to the organisation!
                      <i className="fa fa-quote-right" />
                    </p>{" "}
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>{" "}
                      <li>
                        <i className="fa fa-star" />
                      </li>{" "}
                      <li>
                        <i className="fa fa-star" />
                      </li>{" "}
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>{" "}
                      <li>
                        <i className="fa fa-star" />
                      </li>{" "}
                    </ul>{" "}
                  </div>{" "}
                  <div className="client-info">
                    <img src={Hudson} alt="no internetr connection"/>
                     
                    <h5> Michelle Hudson </h5>{" "}
                    <p> Marketing Manager, Inno supps </p>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      It’ s fantastic to see how committed you are to learning
                      and I wanted to recognise your commitment and effort to
                      learning new parts of your system that you don’ t normally
                      have to tackle.Your enthusiasm and drive to learn learn
                      learn is inspiring, and well done for hitting your
                      milestones no matter how little!
                      <i className="fa fa-quote-right" />
                    </p>{" "}
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>{" "}
                      <li>
                        <i className="fa fa-star" />
                      </li>{" "}
                      <li>
                        <i className="fa fa-star" />
                      </li>{" "}
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>{" "}
                      <li>
                        <i className="fa fa-star" />
                      </li>{" "}
                    </ul>{" "}
                  </div>{" "}
                  <div className="client-info">
                    <img
                      src={Teresia_wachira}
                      alt="no internetr connection"
                    />
                    <h5> Teresia Wachira </h5> <p> Software Engineer </p>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      You always work so passionately to make sure our customers
                      get the best experience and insight and they really are
                      reaping the rewards from your efforts!I love working
                      collaboratively with you, you 're always so authentic and
                      enthusiastic.So glad you 've had some great feedback from
                      customers too as it 's so deserved.{" "}
                      <i className="fa fa-quote-right" />
                    </p>{" "}
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>{" "}
                      <li>
                        <i className="fa fa-star" />
                      </li>{" "}
                      <li>
                        <i className="fa fa-star" />
                      </li>{" "}
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>{" "}
                      <li>
                        <i className="fa fa-star" />
                      </li>{" "}
                    </ul>{" "}
                  </div>{" "}
                  <div className="client-info">
                    <img src={Mwirigi} alt="no internet connection"/>
                    
                    <h5> Mwirigi </h5>{" "}
                    <p> Chief Finanicial Manager, SportPesa </p>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      Your willingness and ability to collaborate with other
                      teams is something we can all learn from.Thank you for
                      offering up your time to help others do their role better
                      through sharing your knowledge, like sharing your insights
                      with the sales team so they could better understand
                      customer needs and why they love working with us.{" "}
                      <i className="fa fa-quote-right" />
                    </p>{" "}
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>{" "}
                      <li>
                        <i className="fa fa-star" />
                      </li>{" "}
                      <li>
                        <i className="fa fa-star" />
                      </li>{" "}
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>{" "}
                      <li>
                        <i className="fa fa-star" />
                      </li>{" "}
                    </ul>{" "}
                  </div>{" "}
                  <div className="client-info">
                    <img src={David} alt="no internetr connection"/>
                    <h5> David Waithaka </h5> <p> CEO David Engineering </p>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      A massive thank you for all of your help collecting the
                      data points and the content for the board meeting.I was
                      really pleased with how the presentation landed and hung
                      together.It wouldn 't have been as slick if it wasn' t for
                      your assistance and input.Thank you!
                      <i className="fa fa-quote-right" />
                    </p>{" "}
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>{" "}
                      <li>
                        <i className="fa fa-star" />
                      </li>{" "}
                      <li>
                        <i className="fa fa-star" />
                      </li>{" "}
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>{" "}
                      <li>
                        <i className="fa fa-star" />
                      </li>{" "}
                    </ul>{" "}
                  </div>{" "}
                  <div className="client-info">
                    <img src={mike} alt="no internet connection" />
                    <h5> Kaigi Muchoki </h5>{" "}
                    <p> CEO Center Forty Technologies </p>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </OwlCarousel>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <div className="footer-image">
        <img src={shape_bg} alt="no internet connection" />
      </div>{" "}
    </div>
  );
}
