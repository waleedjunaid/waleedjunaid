import React, { useEffect, useState } from "react";
import classes from "./MobileFooter.module.css";
import { Col, Row } from "react-bootstrap";
import { EndorseLogo, mainLogo } from "../../constant/imagePath";
import {
  FaFacebookF,
  FaGooglePlusG,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const MobileFooter = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.container}>
      <Row className={`g-0`}>
        <Col md={12}>
          <div className={classes.logoContainer}>
            <img src={mainLogo} />
          </div>
        </Col>
        <Col md={12} className={classes.aboutContainer}>
          <h6>About</h6>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </span>
          <span>info@domain.com</span>
          <span>+1 123 456 7890</span>
        </Col>
        <Col md={12}>
          <ul className={classes.socialIconsUl}>
            <li>
              <a href="https://www.facebook.com" target="_blank">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="https://www.google.com" target="_blank">
                <FaGooglePlusG />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" target="_blank">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com" target="_blank">
                <FaInstagram />
              </a>
            </li>
          </ul>
        </Col>
        <Col md={12} className={classes.copyRightContainer}>
          <span className={classes.copyRightText}>
            &copy; Copyright 2022 Demo Resume.
          </span>
          <div className={classes.privacyAndTermContainer}>
            <span
              className={classes.copyRightText}
              onClick={() => {
                navigate("/privacy-policy");
              }}
            >
              Privacy
            </span>
            <span
              className={[
                classes.copyRightText,
                classes.termAndConditionText,
              ].join(" ")}
              onClick={() => {
                navigate("/terms-and-condition");
              }}
            >
              Terms
            </span>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default MobileFooter;
