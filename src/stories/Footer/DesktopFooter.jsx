import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import classes from "./DesktopFooter.module.css";
import { LogoWhite } from "../../constant/imagePath";
import { ImFacebook } from "react-icons/im";
import { ImGooglePlus } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const DesktopFooter = ({ containerClass }) => {
  const navigate = useNavigate();
  return (
    <section className={classes.footerSection}>
      <Container
        className={[classes.footerContainer, containerClass].join(" ")}
      >
        <Row className={classes.footerRow}>
          <Col lg={3} md={3} sm={12}>
            <div className={classes.footer_logo}>
              <img src={LogoWhite} alt="Logo" className={classes.footerLogo} />
              <div className={classes.footersocial_icons}>
                <div className={classes.facebook_icon}>
                  <ImFacebook />
                </div>
                <div className={classes.google_icon}>
                  <ImGooglePlus />
                </div>
                <div className={classes.twitter_icon}>
                  <BsTwitter />
                </div>
                <div className={classes.instagram_icon}>
                  <BsInstagram />
                </div>
              </div>
            </div>
          </Col>
          <Col lg={3} md={3} sm={12}>
            <div className={classes.footerAbout}>
              <h3>About</h3>
              <p className={`reg ${[classes.desc].join(" ")}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </Col>
          <Col lg={3} md={3} sm={12}>
            <div className={classes.footerContact}>
              <h3>Contact</h3>
              <p className={`reg ${[classes.email].join(" ")}`}>
                info@domain.com
              </p>
              <p className={`reg ${[classes.number].join(" ")}`}>
                +1 123 456 7890
              </p>
            </div>
          </Col>

          <div className={`${[classes.footer_terms_condions].join(" ")}`}>
            <p className="reg">
              <span
                className={[classes.footerNavigations]}
                onClick={() => navigate("/privacy-policy")}
              >
                Privacy Policy
              </span>{" "}
              |
              <span
                className={[classes.footerNavigations]}
                onClick={() => navigate("/terms-and-condition")}
              >
                Terms & Conditions
              </span>{" "}
            </p>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default DesktopFooter;
