import React, { useState, useEffect } from "react";
import { isMobileViewHook } from "../../CustomHooks/isMobileViewHook";
import PropTypes from "prop-types";
import MobileFooter from "./MobileFooter";
import DesktopFooter from "./DesktopFooter";

const Footer = ({ containerClass }) => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    isMobileViewHook(setIsMobile);
  }, [window.innerWidth]);

  return (
    <>
      {isMobile ? (
        <MobileFooter />
      ) : (
        <DesktopFooter containerClass={containerClass} />
      )}
    </>
  );
};

export default Footer;

Footer.propTypes = {
  containerClass: PropTypes.string,
};
