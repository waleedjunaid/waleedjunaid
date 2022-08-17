import React, { useEffect, useState } from "react";
import { isMobileViewHook } from "../../CustomHooks/isMobileViewHook";
import LandingPageDesktop from "./LandingPageDesktop";
import LandingPageMobile from "./LandingPageMobile";

function LandingPage() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    isMobileViewHook(setIsMobile);
  }, [window.innerWidth]);

  return <div>{isMobile ? <LandingPageMobile /> : <LandingPageDesktop />}</div>;
}

export default LandingPage;
