import React, { useState, useEffect } from "react";
import { Button } from "../../stories/Button/Button";
import { Input } from "../../stories/Input/Input";
import classes from "./SignUp.module.css";
import { useNavigate } from "react-router-dom";
import { isMobileViewHook } from "../../CustomHooks/isMobileViewHook";
import { useDispatch } from "react-redux";
import { saveLoginUserData } from "../../store/auth/authSlice";
import { apiHeader, BaseURL } from "../../config/apiUrl";
import { toast } from "react-toastify";
import { Post } from "../../Axios/AxiosFunctions";
import $ from "jquery";
import Header from "../../stories/Header";
import { TextArea } from "../../stories/TextArea";
import { DropDown } from "../../stories/DropDown/DropDown";

import { AiFillLock } from "react-icons/ai";
import { FaUser, FaAddressBook } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import {
  BsTelephoneFill,
  BsGenderFemale,
  BsInfoCircleFill,
} from "react-icons/bs";
import { Col, Container, Row } from "react-bootstrap";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const apiUrl = BaseURL("users/login");
  const Headers = apiHeader();

  const [profileImg, setProfileImg] = useState();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [institute, setInstitute] = useState("");
  const [sport, setSport] = useState("");
  const [league, setLeague] = useState("");
  const [instituteAddress, setInstituteAddress] = useState("");
  const [description, setDescription] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    isMobileViewHook(setIsMobile);
    $(function () {
      var desktopBoxHeight = $("#navDesktopHeader").height();
      var mobileBoxHeight = $("#navMobileHeader").height();
      if (desktopBoxHeight) {
        setHeaderHeight(desktopBoxHeight);
      }
      if (mobileBoxHeight) {
        setHeaderHeight(mobileBoxHeight);
      }
    });
  }, [window.innerWidth]);

  const HandleLoginSubmit = async () => {
    let params = {
      email: email,
      password: password,
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
      <div className={[classes.SignUpScreen].join(" ")}>
        <Header
          backgroundColor={"var(--white-color)"}
          containerClass={classes.headerContainer}
        />
        <style jsx>{``}</style>
        <Container>
          <Row>
            <Col lg={12}>
              <div className={[classes.headingContainer].join(" ")}>
                <h1 className={[classes.headingText].join(" ")}>
                  Register Now
                </h1>
              </div>
            </Col>
            <Col lg={6} className={[classes.mb18].join(" ")}>
              <Input
                value={firstName}
                setter={setFirstName}
                placeholder="First Name"
                type="text"
                leftIcon={<FaUser size="17px" color={`var(--main-color)`} />}
                customStyle={{
                  borderRadius: "10px",
                }}
                inputStyle={{
                  border: "none",
                  fontSize: "18px",
                  padding: "15px 15px 15px 50px",
                }}
                toottipIcon={
                  <BsInfoCircleFill size="17px" color={`var(--main-color)`} />
                }
                tooltipText="Please Enter First Name"
                tooltipClassName={classes.tooltip}
              />
            </Col>
            <Col lg={6} className={[classes.mb18].join(" ")}>
              <Input
                value={lastName}
                setter={setLastName}
                placeholder="Last Name"
                type="text"
                leftIcon={<FaUser size="17px" color={`var(--main-color)`} />}
                customStyle={{
                  borderRadius: "10px",
                }}
                inputStyle={{
                  border: "none",
                  fontSize: "18px",
                  padding: "15px 15px 15px 50px",
                }}
                toottipIcon={
                  <BsInfoCircleFill size="17px" color={`var(--main-color)`} />
                }
                tooltipText="Please Enter Last Name"
                tooltipClassName={classes.tooltip}
              />
            </Col>
            <Col lg={6} className={[classes.mb18].join(" ")}>
              <Input
                value={age}
                setter={setAge}
                placeholder="Age"
                type="number"
                leftIcon={<FaUser size="17px" color={`var(--main-color)`} />}
                customStyle={{
                  borderRadius: "10px",
                }}
                inputStyle={{
                  border: "none",
                  fontSize: "18px",
                  padding: "15px 15px 15px 50px",
                }}
                toottipIcon={
                  <BsInfoCircleFill size="17px" color={`var(--main-color)`} />
                }
                tooltipText="Please Enter Your Age"
                tooltipClassName={classes.tooltip}
              />
            </Col>
            <Col lg={6} className={[classes.mb18].join(" ")}>
              <DropDown
                placeholder="Select Gender"
                isMulti={false}
                value={gender}
                setter={setGender}
                customStyle={{
                  border: "none",
                  fontSize: "18px",
                  borderRadius: "10px",
                  padding: "4px 0px 4px 40px",
                }}
                options={[
                  { label: "Male", value: "Male" },
                  { label: "Female", value: "Female" },
                  { label: "Other", value: "Other" },
                ]}
                optionLabel={"label"}
                optionValue={"value"}
                leftIcon={
                  <BsGenderFemale
                    size="22px"
                    color={`var(--main-color)`}
                    style={{ strokeWidth: "1px" }}
                  />
                }
              />
            </Col>
            <Col lg={6} className={[classes.mb18].join(" ")}>
              <Input
                value={address}
                setter={setAddress}
                placeholder="Personal Address"
                type="text"
                leftIcon={
                  <FaAddressBook size="17px" color={`var(--main-color)`} />
                }
                customStyle={{
                  borderRadius: "10px",
                }}
                inputStyle={{
                  border: "none",
                  fontSize: "18px",
                  padding: "15px 15px 15px 50px",
                }}
                toottipIcon={
                  <BsInfoCircleFill size="17px" color={`var(--main-color)`} />
                }
                tooltipText="Please Enter Personal Address"
                tooltipClassName={classes.tooltip}
              />
            </Col>
            <Col lg={6} className={[classes.mb18].join(" ")}>
              <Input
                value={email}
                setter={setEmail}
                placeholder="Email"
                type="email"
                leftIcon={<IoIosMail size="22px" color={`var(--main-color)`} />}
                customStyle={{
                  borderRadius: "10px",
                }}
                inputStyle={{
                  border: "none",
                  fontSize: "18px",
                  padding: "15px 15px 15px 50px",
                }}
                toottipIcon={
                  <BsInfoCircleFill size="17px" color={`var(--main-color)`} />
                }
                tooltipText="Please enter valid email address"
                tooltipClassName={classes.tooltip}
              />
            </Col>
            <Col lg={6} className={[classes.mb18].join(" ")}>
              <Input
                value={phone}
                setter={setPhone}
                placeholder="Phone Number"
                type="number"
                leftIcon={
                  <BsTelephoneFill size="17px" color={`var(--main-color)`} />
                }
                customStyle={{
                  borderRadius: "10px",
                }}
                inputStyle={{
                  border: "none",
                  fontSize: "18px",
                  padding: "15px 15px 15px 50px",
                }}
                toottipIcon={
                  <BsInfoCircleFill size="17px" color={`var(--main-color)`} />
                }
                tooltipText="Please enter your phone number."
                tooltipClassName={classes.tooltip}
              />
            </Col>

            <Col lg={6} className={[classes.mb18].join(" ")}>
              <Input
                value={password}
                setter={setPassword}
                placeholder="Password"
                type="password"
                leftIcon={
                  <AiFillLock size="19px" color={`var(--main-color)`} />
                }
                customStyle={{
                  borderRadius: "10px",
                }}
                inputStyle={{
                  border: "none",
                  fontSize: "18px",
                  padding: "15px 15px 15px 50px",
                }}
              />
            </Col>
            <Col lg={6} className={[classes.mb18].join(" ")}>
              <Input
                value={confirmPassword}
                setter={setConfirmPassword}
                placeholder="Confirm Password"
                type="password"
                leftIcon={
                  <AiFillLock size="19px" color={`var(--main-color)`} />
                }
                customStyle={{
                  borderRadius: "10px",
                }}
                inputStyle={{
                  border: "none",
                  fontSize: "18px",
                  padding: "15px 15px 15px 50px",
                }}
              />
            </Col>

            <Col lg={12} className={[classes.mb18].join(" ")}>
              <TextArea
                value={description}
                setter={setDescription}
                placeholder="Description"
                customStyle={{ padding: "16px" }}
                toottipIcon={
                  <BsInfoCircleFill size="17px" color={`var(--main-color)`} />
                }
                tooltipText="Please enter your phone number."
                tooltipClassName={classes.tooltipTextArea}
              />
            </Col>
            <Col lg={6} className={[classes.mb18].join(" ")}>
              <Button
                label={loading ? "Loading..." : "Sign Up"}
                customStyle={{
                  borderRadius: "10px",
                  width: "100%",
                  height: "60px",
                  fontSize: "22px",
                  fontFamily: "plus-jakarta-display-bold",
                  backgroundColor: `var(--main-color)`,
                  color: "white",
                }}
                disabled={loading}
                onClick={HandleLoginSubmit}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default SignUp;
