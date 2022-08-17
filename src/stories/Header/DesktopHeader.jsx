import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, OverlayTrigger } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { MdOutlineNotifications } from "react-icons/md";
import { FiMail } from "react-icons/fi";
import { BiBookmark } from "react-icons/bi";
import { AiFillSetting } from "react-icons/ai";
import { IoLogOut, IoWallet } from "react-icons/io5";

import Style from "./DesktopHeader.module.css";
import { EndorseLogo, mainLogo } from "../../constant/imagePath";
import HeaderNotification from "../HeaderNotification/HeaderNotification";
import { signOutRequest } from "../../store/auth/authSlice";
import { apiUrl, imageUrl } from "../../config/apiUrl";
import { Button } from "../Button/Button";

const SettingsOverlay = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user: userData, fcmToken } = useSelector(
    (state) => state?.authReducer
  );

  const HandleSubmitSignOut = () => {
    dispatch(signOutRequest());
    navigate("/login");
  };

  return (
    <div className={[Style.SettingsPopup]}>
      <div
        className={[Style.editprofileDiv]}
        onClick={() => navigate("/setting")}
      >
        <AiFillSetting size={20} className={[Style.editProfileIcons]} />{" "}
        <span>Settings</span>
      </div>
      <div
        className={[Style.editprofileDiv]}
        onClick={() => navigate("/wallet")}
      >
        <IoWallet size={20} className={[Style.editProfileIcons]} />
        <span>Wallet</span>
      </div>
      <div
        className={[Style.editprofileDiv]}
        onClick={() => {
          HandleSubmitSignOut();
        }}
      >
        <IoLogOut size={20} className={[Style.editProfileIcons]} />
        <span>Logout</span>
      </div>
    </div>
  );
};

const DesktopHeader = ({
  logo = mainLogo,
  backgroundColor,
  containerClass,
  className,
}) => {
  const [showNotificationOverlay, setShowNotificationOverlay] = useState(false);
  const [showSettingsOverlay, setShowSettingsOverlay] = useState(false);
  const { user: userData, isLogin } = useSelector(
    (state) => state?.authReducer
  );

          // Sticky Menu Area
          useEffect(() => {
            window.addEventListener('scroll', isSticky);
            return () => {
                window.removeEventListener('scroll', isSticky);
            };
        },[]);
    
               
        /* Method that will fix header after a specific scrollable */
               const isSticky = (e) => {
                    const header = document.querySelector('#navDesktopHeader');
                    const scrollTop = window.scrollY;
                    scrollTop >= 50 ? header.classList.add(Style.isSticky) : header.classList.remove(Style.isSticky);
                };

  const navigate = useNavigate();

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className={`${[Style.header, className].join(" ")}`}
      style={{ backgroundColor: backgroundColor }}
      id={"navDesktopHeader"}
    >
      <Container
        className={`${[Style.navbarContainer, containerClass].join(" ")}`}
      >
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" className={Style.logoImage} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className={`mx-auto ${[Style.gapCustm].join(" ")}`} gap={5}>
            {isLogin ? (
              <>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    isActive
                      ? `${[Style.nabarLinks, Style.navActive].join(" ")}`
                      : `${[Style.nabarLinks]}`
                  }
                >
                  Find Project
                </NavLink>
                <NavLink
                  to="/reports"
                  className={({ isActive }) =>
                    isActive
                      ? `${[Style.nabarLinks, Style.navActive].join(" ")}`
                      : `${[Style.nabarLinks]}`
                  }
                >
                  Reports
                </NavLink>
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    isActive
                      ? `${[Style.nabarLinks, Style.navActive].join(" ")}`
                      : `${[Style.nabarLinks]}`
                  }
                >
                  My Projects
                </NavLink>
                {userData?.role === "business" && (
                  <NavLink
                    to="/create-job"
                    className={({ isActive }) =>
                      isActive
                        ? `${[Style.nabarLinks, Style.navActive].join(" ")}`
                        : `${[Style.nabarLinks]}`
                    }
                  >
                    Post Project
                  </NavLink>
                )}
              </>
            ) : (
              <>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? `${[Style.nabarLinks, Style.navActive].join(" ")}`
                      : `${[Style.nabarLinks]}`
                  }
                >
                  Home
                </NavLink>
                <Nav.Link
                  to="/about-us"
                  className={Style.nabarLinks}>
                    About
                </Nav.Link>
                <NavLink
                  to="/blogs"
                  className={({ isActive }) =>
                    isActive
                      ? `${[Style.nabarLinks, Style.navActive].join(" ")}`
                      : `${[Style.nabarLinks]}`
                  }
                >
                  Blogs
                </NavLink>
                <NavLink
                  to="/reviews"
                  className={({ isActive }) =>
                    isActive
                      ? `${[Style.nabarLinks, Style.navActive].join(" ")}`
                      : `${[Style.nabarLinks]}`
                  }
                >
                  Reviews
                </NavLink>
                <NavLink
                  to="/pricing"
                  className={({ isActive }) =>
                    isActive
                      ? `${[Style.nabarLinks, Style.navActive].join(" ")}`
                      : `${[Style.nabarLinks]}`
                  }
                >
                  Pricing
                </NavLink>
              </>
            )}
          </Nav>

          {isLogin ? (
            <div className={[Style.dflex].join(" ")}>
              <div className={[Style.iconDiv].join(" ")}>
                <OverlayTrigger
                  placement={"bottom"}
                  show={showNotificationOverlay}
                  trigger={["click"]}
                  overlay={
                    <div className={[Style.notifyoverlayDiv]}>
                      <HeaderNotification />
                    </div>
                  }
                  onToggle={() =>
                    setShowNotificationOverlay(!showNotificationOverlay)
                  }
                >
                  <MdOutlineNotifications
                    color={"#C5C6C9"}
                    size="34px"
                    className={[Style.afterIcon].join(" ")}
                  />
                </OverlayTrigger>
                <FiMail
                  color={"#C5C6C9"}
                  size="30px"
                  className={[Style.afterIcon].join(" ")}
                  onClick={() => navigate("/chat")}
                />
                {userData?.role !== "business" && (
                  <BiBookmark
                    color={"#C5C6C9"}
                    size="30px"
                    className={[Style.afterIcon].join(" ")}
                    onClick={() => navigate("/bookmarks")}
                  />
                )}
              </div>
              <OverlayTrigger
                placement={"bottom"}
                show={showSettingsOverlay}
                trigger={["click"]}
                overlay={
                  <div className={[Style.SettingsoverlayDiv]}>
                    <SettingsOverlay />
                  </div>
                }
                onToggle={() => setShowSettingsOverlay(!showSettingsOverlay)}
              >
                <div className={[Style.profileImg]}>
                  <img src={`${imageUrl}${userData?.photo}`} alt="..." />
                </div>
              </OverlayTrigger>
            </div>
          ) : (
            <div className={[Style.dflex].join(" ")}>
              <div>
                <Button
                  label="Login"
                  className={Style?.logBtn}
                  onClick={() => navigate("/login")}
                />
              </div>
              <div>
                <Button
                  label="Sign Up"
                  customStyle={{ padding: "10px 40px", marginLeft: "10px" }}
                  onClick={() => navigate("/signup")}
                />
              </div>
            </div>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default DesktopHeader;
