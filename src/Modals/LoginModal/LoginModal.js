import React, { useState } from "react";
import classes from "./LoginModal.module.css";
import { Col, Row, Modal } from "react-bootstrap";
import { Input } from "../../stories/Input/Input";
import { Button } from "../../stories/Button/Button";
import { useSelector } from "react-redux";
import { apiHeader, BaseURL } from "../../config/apiUrl";

import { AiFillLock } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";
import { BsInfoCircleFill } from "react-icons/bs";
import { Post } from "../../Axios/AxiosFunctions";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const LoginModal = (props) => {
  const { show, setShow } = props;
  const navigate = useNavigate();

  const { fcmToken } = useSelector((state) => state?.authReducer);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const apiUrl = BaseURL("users/login");
  const Headers = apiHeader();

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
    }
    setLoading(false);
  };

  return (
    <>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        contentClassName={classes.modalLoginContainer}
        dialogClassName={classes.modalLoginDailog}
      >
        <Row>
          <Col md={12}>
            <div className={[classes.headingContainer].join(" ")}>
              <h1 className={[classes.headingText].join(" ")}>Login</h1>
              <p className={[classes.headingSubText].join(" ")}>
                Enter Your Persnol Details And Start Journey With Us
              </p>
            </div>
          </Col>
          <Col md={12}>
            <form>
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
                  marginBottom: "20px",
                  marginTop: "20px",
                }}
                inputStyle={{
                  border: "none",
                  fontSize: "18px",
                  padding: "15px 15px 15px 50px",
                }}
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
                  height: "60px",
                  fontSize: "22px",
                  fontFamily: "plus-jakarta-display-bold",
                  backgroundColor: `var(--main-color)`,
                  color: "white",
                }}
                disabled={loading}
                onClick={HandleLoginSubmit}
              />
              <p className={[classes.signUp].join(" ")}>
                Don’t have an account?{" "}
                <span
                  className={[classes.navigate]}
                  onClick={() => navigate("/signup")}
                >
                  Sign Up
                </span>
              </p>
            </form>
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default LoginModal;
