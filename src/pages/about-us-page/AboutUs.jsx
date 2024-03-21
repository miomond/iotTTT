import React from "react";
import  './aboutUs.css'
import slider from '../../assets/slider-dec.png'
import aboutRight from '../../assets/about-right-dec.png'
import heading from '../../assets/heading-line-dec.png'
import Navpar from "../../components/NAv/Navpar";
import LandinngFooterSection from "../../components/footer/LandinngFooterSection";
function AboutUs() {
  return (
    <>
    <Navpar/>
    <div
        className="main-banner wow fadeIn  "
        id="top"
        data-wow-duration="1s"
        data-wow-delay="0.5s"
      >
        <div className="container ">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-6 align-self-center">
                  <div
                    className="left-content show-up header-text wow fadeInLeft"
                    data-wow-duration="1s"
                    data-wow-delay="1s"
                  >
                    <div className="row mb-5 ">
                      <div className="col-lg-12">
                        <h2>Get The Latest App From App Stores</h2>
                        <p >
                          Chain App Dev is an app landing page HTML5 template
                          based on Bootstrap v5.1.3 CSS layout provided by
                          TemplateMo, a great website to download free CSS
                          templates.
                        </p>
                      </div>
                      <div className="col-lg-12">
                        <div className="white-button first-button scroll-to-section">
                          <a href="#contact">
                            Free Quote <i className="fab fa-apple" />
                          </a>
                        </div>
                        <div className="white-button scroll-to-section">
                          <a href="#contact">
                            Free Quote <i className="fab fa-google-play" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div
                    className="right-image wow fadeInRight"
                    data-wow-duration="1s"
                    data-wow-delay="0.5s"
                  >
                    <img src={slider} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>












<div id="services" className="services section">
  <div className="container">
    <div className="row">
      <div className="col-lg-8 offset-lg-2">
        <div
          className="section-heading  wow fadeInDown"
          data-wow-duration="1s"
          data-wow-delay="0.5s"
        >
          <h4>
            Amazing <em>Services &amp; Features</em> for you
          </h4>
          <img src="assets/images/heading-line-dec.png" alt="" />
          <p>
            If you need the greatest collection of HTML templates for your
            business, please visit{" "}
            <a rel="nofollow" href="https://www.toocss.com/" target="_blank">
              TooCSS
            </a>{" "}
            Blog. If you need to have a contact form PHP script, go to{" "}
            <a href="https://templatemo.com/contact" target="_parent">
              our contact page
            </a>{" "}
            for more information.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-lg-3">
        <div className="service-item first-service">
          <div className="icon" />
          <h4>App Maintenance</h4>
          <p>
            You are not allowed to redistribute this template ZIP file on any
            other website.
          </p>
          <div className="text-button">
            <a href="#">
              Read More <i className="fa fa-arrow-right" />
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="service-item second-service">
          <div className="icon" />
          <h4>Rocket Speed of App</h4>
          <p>
            You are allowed to use the Chain App Dev HTML template. Feel free to
            modify or edit this layout.
          </p>
          <div className="text-button">
            <a href="#">
              Read More <i className="fa fa-arrow-right" />
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="service-item third-service">
          <div className="icon" />
          <h4>Multi Workflow Idea</h4>
          <p>
            If this template is beneficial for your work, please support us{" "}
            <a
              rel="nofollow"
              href="https://paypal.me/templatemo"
              target="_blank"
            >
              a little via PayPal
            </a>
            . Thank you.
          </p>
          <div className="text-button">
            <a href="#">
              Read More <i className="fa fa-arrow-right" />
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="service-item fourth-service">
          <div className="icon" />
          <h4>24/7 Help &amp; Support</h4>
          <p>
            Lorem ipsum dolor consectetur adipiscing elit sedder williamsburg
            photo booth quinoa and fashion axe.
          </p>
          <div className="text-button">
            <a href="#">
              Read More <i className="fa fa-arrow-right" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>










<div id="about" className="about-us section">
  <div className="container">
    <div className="row">
      <div className="col-lg-6 align-self-center">
        <div className="section-heading">
          <h4>
            About <em>What We Do</em> &amp; Who We Are
          </h4>
          <img src={heading} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eismod tempor incididunt ut labore et dolore magna.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="box-item">
              <h4>
                <a href="#">Maintance Problems</a>
              </h4>
              <p>Lorem Ipsum Text</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="box-item">
              <h4>
                <a href="#">24/7 Support &amp; Help</a>
              </h4>
              <p>Lorem Ipsum Text</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="box-item">
              <h4>
                <a href="#">Fixing Issues About</a>
              </h4>
              <p>Lorem Ipsum Text</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="box-item">
              <h4>
                <a href="#">Co. Development</a>
              </h4>
              <p>Lorem Ipsum Text</p>
            </div>
          </div>
          <div className="col-lg-12">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eismod tempor idunte ut labore et dolore adipiscing magna.
            </p>
            <div className="gradient-button">
              <a href="#">Start 14-Day Free Trial</a>
            </div>
            <span>*No Credit Card Required</span>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="right-image">
          <img src={aboutRight} alt="" />
        </div>
      </div>
    </div>
  </div>
</div>



<LandinngFooterSection/>














    </>
  );
}

export default AboutUs;