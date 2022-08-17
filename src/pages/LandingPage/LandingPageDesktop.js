import React, { useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import {
  LogoWhite,
  resumeSearch,
  ourWriter,
  HowItWorks1,
  HowItWorks2,
  HowItWorks3,
} from "../../constant/imagePath";
import Footer from "../../stories/Footer";
import classes from "./LandingPageDesktop.module.css";
import HeaderClasses from "../../stories/Header/DesktopHeader.module.css";
import ButtonClasses from "../../stories/Button/button.module.css";

import { HowWeWorkCard } from "../../stories/HowWeWorkCard";
import { useLocation } from "react-router-dom";
import Header from "../../stories/Header";
import { useNavigate } from "react-router-dom";

export default function LandingPageDesktop() {
  const location = useLocation();
  const navigate = useNavigate();
  const href = location?.state?.href;
  const path = window.location.href;
  useEffect(() => {
    if (href) {
      const currentPath = path.substring(0, path.length - 1);
      window.location.replace(`${currentPath}${href}`);
    }
  }, [location]);

  const howWeWorkCustomerData = [
    {
      img: HowItWorks1,
      stepNo: "01",
      title: "Get Matched",
      description: "Use this feature to Get matched with an expert writer.",
    },
    {
      img: HowItWorks2,
      stepNo: "02",
      title: "One-on-One",
      description: "Work one-on-one to craft your career story.",
    },
    {
      img: HowItWorks3,
      stepNo: "03",
      title: "Resume Tailored",
      description: "Receive a resume tailored to your goals.",
    },
  ];

  return (
    <div className={classes.landingPage}>
      <style>
        {`
        .${HeaderClasses?.nabarLinks} {
          color: var(--white-color) !important;
        }
        .${ButtonClasses?.btn} {
          color: var(--white-color);
          background-color: var(--main-color);
        }
        .${HeaderClasses?.logBtn} {
          color: var(--white-color);
          border-color: var(--main-color);
        }
        .${HeaderClasses?.isSticky} {
          background: var(--main-color) !important;
        }
        .${HeaderClasses?.isSticky} .${HeaderClasses?.logBtn} {
          border-color: var(--white-color);
          color: var(--white-color) !important;
        }
        .${HeaderClasses?.isSticky} .${ButtonClasses?.btn} {
          color: var(--main-color);
          background-color: var(--white-color);
        }

        `}
      </style>
      {/* Hero Section */}
      <Header
        logo={LogoWhite}
        backgroundColor={"var(--white-color)"}
        containerClass={classes.container}
        className={classes.headerMainSection}
      />
      <section className={classes.heroSection}>
        <div className={classes.overLay}>
          {" "}
          <Container className={`${[classes.container].join(" ")}`}>
            <Row className={classes.heroSectionRow}>
              <Col md={7}>
                <div className={classes.left}>
                  <div>
                    <h1>Getting a great job starts with a great resume.</h1>
                    <p className={`reg ${[classes.desc].join(" ")}`}>
                      Upload your resume for a <span>free expert review.</span>
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      {/* About section starts */}
      <section className={classes.aboutUsSection} id="about">
        <Container className={classes.container}>
          <Row>
            <Col xxl={5} md={6} lg={6} sm={12}>
              <div className={classes.about_left_section}>
                <img src={resumeSearch} alt="aboutImg" />
              </div>
            </Col>
            <Col xxl={7} md={6} lg={6} sm={12}>
              <div className={classes.about_right_section}>
                <h2>The world's leading resume‑writing service.</h2>
                <p className="reg">
                  You’ll be in good hands with TopResume’s professional writers.
                  Our team of writers has expertise in more than 65 industries
                  and includes certified career coaches, recruiters, and
                  experienced hiring professionals.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* About section ends */}
      {/*Start How We Work For Customer */}
      <section className={classes.howWeWorkForCustomer}>
        <Container className={classes.container}>
          <Row>
            <Col md={12}>
              <div className={classes.headingsCol}>
                <h2>How We Work</h2>
              </div>
            </Col>
            {howWeWorkCustomerData?.map((item) => (
              <Col md={4}>
                <HowWeWorkCard
                  isBoxShadow={false}
                  {...item}
                  textColor={"var(--white-color)"}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      {/*End How We Work For Customer */}

      {/* job  section starts */}
      <section className={classes.findDealsSection}>
        <Container className={classes.container}>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <div className={classes.jobSection_LeftSection}>
                <h2>Our career expert is here for you!</h2>
                <p>
                  TopResume’s in-house career specialist, Amanda Augustine, is
                  here to help you get hired faster and move ahead in your
                  career. A well-recognized expert and speaker in career
                  advancement, Amanda’s advice can help you with everything from
                  developing your professional brand to acing the next
                  interview.
                </p>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <div className={classes.jobSection_RightSection}>
                <img src={ourWriter} alt="jobsectimg" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* job  section ends */}

      <Footer />
    </div>
  );
}
