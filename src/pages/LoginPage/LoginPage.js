import React, { useState, useEffect } from "react";
import {
  EndorseLogo,
  logoWithWhiteEndorse,
  mainLogo,
} from "../../constant/imagePath";
import { Button } from "../../stories/Button/Button";
import { Input } from "../../stories/Input/Input";
import DesktopHeaderClasses from "../../stories/Header/DesktopHeader.module.css";
import MobileHeaderClasses from "../../stories/Header/MobileHeader.module.css";
import classes from "./LoginPage.module.css";
import { useNavigate } from "react-router-dom";
import { AiFillLock } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import InputClasses from "../../stories/Input/input.module.css";
import ButtonClasses from "../../stories/Button/button.module.css";

import { isMobileViewHook } from "../../CustomHooks/isMobileViewHook";
import { useDispatch, useSelector } from "react-redux";
import { saveLoginUserData } from "../../store/auth/authSlice";
import { apiHeader, BaseURL } from "../../config/apiUrl";

import { toast } from "react-toastify";
import { Post } from "../../Axios/AxiosFunctions";
import $ from "jquery";
import Header from "../../stories/Header";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { fcmToken } = useSelector((state) => state?.authReducer);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const apiUrl = BaseURL("users/login");
  const Headers = apiHeader();

  useEffect(() => {
    isMobileViewHook(setIsMobile);
  }, [window.innerWidth]);

  const HandleLoginSubmit = async () => {
    let params = {
      email: email,
      password: password,
      fcmToken,
    };
    Object.keys(params).forEach(function (key) {
      if (params[key] == "") {
        return toast.error("Please fill all the fields");
      }
    });
    setLoading(true);
    const responseData = await Post(apiUrl, params, Headers);

    if (responseData !== undefined) {
      console.log(responseData?.data);
      await dispatch(saveLoginUserData(responseData?.data));
    }
    setLoading(false);
  };

  return (
    <>
      <div className={[classes.LoginScreen].join(" ")}>
        <Header containerClass={classes.headerContainer} />
        <style jsx>{`
          .${InputClasses.inputPassContainer} input::placeholder {
            color: var(--text-color-black) !important;
          }
        `}</style>
        <div className={[classes.innerDiv].join(" ")}>
          <div className={[classes.logoDiv].join(" ")}>
            <div className={[classes.logo].join(" ")}>
              <img src={mainLogo} alt="..." />
            </div>
          </div>
          <div>
            <div className={[classes.formContainer].join(" ")}>
              <Input
                placeholder="enter email..."
                type="email"
                value={email}
                setter={setEmail}
                leftIcon={<FaUser size="19px" color={`var(--main-color)`} />}
                customStyle={{
                  borderRadius: "10px",
                  marginBottom: "20px",
                }}
                inputStyle={{ border: "none" }}
              />
              <Input
                placeholder="Password"
                type="password"
                value={password}
                setter={setPassword}
                leftIcon={
                  <AiFillLock size="19px" color={`var(--main-color)`} />
                }
                customStyle={{
                  borderRadius: "10px",
                }}
                inputStyle={{ border: "none" }}
              />
              <p
                className={["reg", classes.forgetPassword].join(" ")}
                onClick={() => navigate("/forget-password")}
              >
                Forgot Password?
              </p>
              <Button
                label={loading ? "Loading..." : "Log In"}
                customStyle={{
                  borderRadius: "10px",
                  width: "100%",
                  height: "50px",
                  fontSize: "22px",
                  fontFamily: "plus-jakarta-display-bold",
                  backgroundColor: `var(--main-color)`,
                  color: "white",
                  margin: "auto",
                  padding: "0px",
                }}
                disabled={loading}
                onClick={HandleLoginSubmit}
              />
            </div>
            <p className={[classes.signUp].join(" ")}>
              Don’t have an account?{" "}
              <span
                className={[classes.navigate]}
                onClick={() => navigate("/signup")}
              >
                Sign Up
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
