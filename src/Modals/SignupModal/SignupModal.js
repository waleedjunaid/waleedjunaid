import React, { useState } from "react";
import classes from "./SignupModal.module.css";
import { Col, Row, Modal } from "react-bootstrap";
import { Input } from "../../stories/Input/Input";
import { Button } from "../../stories/Button/Button";

import { AiFillLock } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { BsTelephoneFill, BsInfoCircleFill } from "react-icons/bs";
import { TextArea } from "../../stories/TextArea";
import { apiHeader, BaseURL } from "../../config/apiUrl";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Post } from "../../Axios/AxiosFunctions";

const SignupModal = (props) => {
  const { show, setShow } = props;

  const { fcmToken } = useSelector((state) => state?.authReducer);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [description, setDescription] = useState("");

  const [loading, setLoading] = useState(false);

  const apiUrl = BaseURL("users/login");
  const Headers = apiHeader();

  const HandleSignupSubmit = async () => {
    let params = {
      firstName,
      lastName,
      email,
      password,
      passwordConfirm: confirmPassword,
      contact: phone,
      fcmToken: fcmToken,
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
    }
    setLoading(false);
  };
  return (
    <>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        contentClassName={classes.modalSignupContainer}
        dialogClassName={classes.modalSignupDailog}
      >
        <form>
          <Row>
            <Col md={12}>
              <div className={[classes.headingContainer].join(" ")}>
                <h1 className={[classes.headingText].join(" ")}>
                  Register Now
                </h1>
              </div>
            </Col>
            <Col md={6} className={[classes.mb18].join(" ")}>
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
            <Col md={6} className={[classes.mb18].join(" ")}>
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
            <Col md={6} className={[classes.mb18].join(" ")}>
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
            <Col md={6} className={[classes.mb18].join(" ")}>
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
            <Col md={6} className={[classes.mb18].join(" ")}>
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
            <Col md={6} className={[classes.mb18].join(" ")}>
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
            <Col md={12}>
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
                onClick={HandleSignupSubmit}
              />
            </Col>
          </Row>
        </form>
      </Modal>
    </>
  );
};

export default SignupModal;
