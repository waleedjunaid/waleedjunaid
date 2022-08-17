import React, { useEffect, useState } from "react";
import classes from "./LandingPageMobile.module.css";
import HeaderClasses from "../../stories/Header/DesktopHeader.module.css";
import ButtonClasses from "../../stories/Button/button.module.css";
import { Row, Col } from "react-bootstrap";
import {
  HowItWorks1,
  HowItWorks2,
  HowItWorks3,
} from "../../constant/imagePath";
import { HowWeWorkCard } from "../../stories/HowWeWorkCard";
import Footer from "../../stories/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../stories/Header";

const LandingPageMobile = () => {
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
    <div className={[classes.LandingPageMobileScreen]}>
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
      <Header />
      {/* Hero Section */}
      <section>
        <div className={[classes.heroDiv]}>
          <div className={[classes.overLay]}>
            <p className={[classes.heroHeader]}>
              Getting a great job starts with a great resume.
            </p>
            <p className={[classes.heroContent]}>
              Upload your resume for a <span>free expert review.</span>
            </p>
          </div>
        </div>
      </section>
      {/* About Us */}
      <section className={[classes.AboutUs]} id="about">
        <div className={[classes.AboutUsDiv]}>
          <p className={[classes.aboutSubHeader]}>
            The world's leading resume‑writing service.
          </p>
          <p className={[classes.aboutDescription]}>
            You’ll be in good hands with TopResume’s professional writers. Our
            team of writers has expertise in more than 65 industries and
            includes certified career coaches, recruiters, and experienced
            hiring professionals.
          </p>
        </div>
      </section>
      {/* How We Work Customer */}
      <section className={[classes.HowWeWork]}>
        <div className={[classes.HowWeWorkDiv]}>
          <Row className={["g-0"]}>
            <Col md={12}>
              <div className={classes.HowWeWorkHeader}>
                <h2>How We Work</h2>
              </div>
            </Col>
            {howWeWorkCustomerData?.map((item) => (
              <Col md={12}>
                <HowWeWorkCard
                  isBoxShadow={false}
                  {...item}
                  textColor={"var(--white-color)"}
                />
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* Deals Section */}
      <section className={[classes.FindDeals]}>
        <div className={[classes.FindDealsTopDiv]}>
          <p className={[classes.FindDealsTopHeader]}>
            Our career expert is here for you!
          </p>
          <p className={[classes.FindDealsTopDescription]}>
            TopResume’s in-house career specialist, Amanda Augustine, is here to
            help you get hired faster and move ahead in your career. A
            well-recognized expert and speaker in career advancement, Amanda’s
            advice can help you with everything from developing your
            professional brand to acing the next interview.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};
export default LandingPageMobile;
