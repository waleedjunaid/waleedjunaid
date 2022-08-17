import React, { useState } from "react";
import PropTypes from "prop-types";
import classes from "./MobileHeader.module.css";
import {
  coachDemoImg,
  mainLogo,
  logoWithWhiteEndorse,
  LogoWhite,
} from "../../constant/imagePath";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiBook2Fill, RiDashboardFill } from "react-icons/ri";
import { GoGraph, GoSignIn } from "react-icons/go";
import { IoIosListBox } from "react-icons/io";
import { AiFillShop, AiOutlineSolution } from "react-icons/ai";
import { AiFillSetting } from "react-icons/ai";
import { IoHome, IoLogIn, IoLogOut, IoWalletOutline } from "react-icons/io5";
import {
  BsFillBookmarkStarFill,
  BsFillChatDotsFill,
  BsFillPeopleFill,
} from "react-icons/bs";
import { MdNotifications } from "react-icons/md";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { apiUrl, imageUrl } from "../../config/apiUrl";
import { signOutRequest } from "../../store/auth/authSlice";

export const MobileHeader = ({ customStyle, logo = mainLogo }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state?.authReducer?.isLogin);
  const user = useSelector((state) => state?.authReducer?.user);
  const fcmToken = useSelector((state) => state?.authReducer?.fcmToken);

  // const isLogin = true;

  // current page url path name
  const currentPage = window.location.pathname;
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const RenderListItem = ({ icon, text, customClass, path, href }) => {
    return (
      <div
        className={[classes.listItem, customClass].join(" ")}
        onClick={() => {
          if (path.toLowerCase() == "logout") {
            dispatch(signOutRequest());
            navigate("/login");
          } else {
            navigate(path, { state: { href } });
          }
        }}
      >
        {icon}
        <span className={classes.listItemText}>{text}</span>
      </div>
    );
  };

  return (
    <>
      <div className={classes.headerMainDiv} id={"navMobileHeader"}>
        <div className={classes.header} style={{ ...customStyle }}>
          <div className={classes.imageContainer}>
            <img src={logo} className={classes.logo} alt="logo" />
          </div>
          <GiHamburgerMenu
            className={classes.hamburger}
            onClick={() => {
              toggleDrawer();
            }}
          />
        </div>
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="right"
          className="bla bla bla"
        >
          <div className={classes.drawerContainer}>
            <div
              className={classes.drawerUserSection}
              style={isLogin == false ? { height: "100px" } : {}}
            >
              {isLogin ? (
                <>
                  <img
                    src={`${imageUrl}${user?.photo}`}
                    className={classes.drawerUserImage}
                    alt="profile"
                  />
                  <span className={classes.drawerUserName}>
                    {user?.firstName} {user?.lastName}
                  </span>
                  <span className={classes.drawerUserEmail}>
                    {user?.email}
                    {/* test@gmail.com */}
                  </span>
                </>
              ) : (
                <>
                  <img
                    src={LogoWhite}
                    className={classes.drawerLogo}
                    alt="logo"
                  />
                </>
              )}
            </div>
            <div className={classes.drawerList}>
              {isLogin ? (
                <>
                  <RenderListItem
                    icon={<RiDashboardFill />}
                    text={"Find Project"}
                    customClass={
                      currentPage == "/dashboard" && classes.activeItem
                    }
                    path={"/dashboard"}
                  />
                  <RenderListItem
                    icon={<GoGraph />}
                    text={"Report"}
                    customClass={
                      currentPage == "/reports" && classes.activeItem
                    }
                    path={"/reports"}
                  />
                  <RenderListItem
                    icon={<IoIosListBox />}
                    text={"My Projects"}
                    customClass={
                      currentPage == "/projects" && classes.activeItem
                    }
                    path={"/projects"}
                  />
                  {user?.role === "business" && (
                    <RenderListItem
                      icon={<AiOutlineSolution />}
                      text={"Post Projects"}
                      customClass={
                        currentPage == "/create-job" && classes.activeItem
                      }
                      path={"/create-job"}
                    />
                  )}
                  <hr
                    style={{
                      width: "100%",
                      marginBottom: "0px",
                    }}
                  />
                  <RenderListItem
                    icon={<MdNotifications />}
                    text={"Notification"}
                    customClass={
                      currentPage == "/notifications" && classes.activeItem
                    }
                    path={"/notifications"}
                  />
                  <RenderListItem
                    icon={<BsFillChatDotsFill />}
                    text={"Chat"}
                    customClass={currentPage == "/chat" && classes.activeItem}
                    path={"/chat"}
                  />
                  {user?.role !== "business" && (
                    <RenderListItem
                      icon={<BsFillBookmarkStarFill />}
                      text={"Bookmark"}
                      customClass={
                        currentPage == "/bookmarks" && classes.activeItem
                      }
                      path={"/bookmarks"}
                    />
                  )}
                  <hr
                    style={{
                      width: "100%",
                      marginBottom: "0px",
                    }}
                  />
                  <RenderListItem
                    icon={<AiFillSetting />}
                    text={"setting"}
                    customClass={
                      currentPage == "/setting" && classes.activeItem
                    }
                    path={"/setting"}
                  />
                  <RenderListItem
                    icon={<IoWalletOutline />}
                    text={"Wallet"}
                    customClass={currentPage == "/wallet" && classes.activeItem}
                    path={"/wallet"}
                  />
                  <RenderListItem
                    icon={<IoLogOut />}
                    text={"logout"}
                    path={"logout"}
                  />
                </>
              ) : (
                <>
                  <RenderListItem
                    icon={<IoHome />}
                    text={"Home"}
                    customClass={currentPage == "/" && classes.activeItem}
                    path={"/"}
                  />
                  <RenderListItem
                    icon={<RiBook2Fill />}
                    text={"About"}
                    customClass={currentPage == "/about-us" && classes.activeItem}
                    path={"/about-us"}
                  />
                  <RenderListItem
                    icon={<AiFillShop />}
                    text={"Blogs"}
                    customClass={
                      currentPage == "/blogs" && classes.activeItem
                    }
                    path={"/blogs"}
                  />
                  <RenderListItem
                    icon={<BsFillPeopleFill />}
                    text={"Reviews"}
                    customClass={
                      currentPage == "/reviews" && classes.activeItem
                    }
                    path={"/reviews"}
                  />
                  <RenderListItem
                    icon={<BsFillPeopleFill />}
                    text={"Pricing"}
                    customClass={
                      currentPage == "/pricing" && classes.activeItem
                    }
                    path={"/pricing"}
                  />
                  <hr
                    style={{
                      width: "100%",
                      marginBottom: "0px",
                    }}
                  />
                  <RenderListItem
                    icon={<IoLogIn />}
                    text={"Login"}
                    customClass={currentPage == "/login" && classes.activeItem}
                    path={"/login"}
                  />
                  <RenderListItem
                    icon={<GoSignIn />}
                    text={"Signup"}
                    customClass={currentPage == "/signup" && classes.activeItem}
                    path={"/signup"}
                  />
                </>
              )}
            </div>
          </div>
        </Drawer>
      </div>
    </>
  );
};

MobileHeader.propTypes = {
  customStyle: PropTypes.object,
};

MobileHeader.defaulProps = {};
