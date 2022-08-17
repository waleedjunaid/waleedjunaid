import React, { useState } from "react";
import classes from "./UpdatePassword.module.css";
import { Modal } from "react-bootstrap";
import { AiFillLock } from "react-icons/ai";
import { Button } from "../../stories/Button/Button";
import { apiHeader, BaseURL, imageUrl } from "../../config/apiUrl";
import { useNavigate } from "react-router-dom";
import { Input } from "../../stories/Input/Input";
import { Patch } from "../../Axios/AxiosFunctions";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { saveLoginUserData } from "../../store/auth/authSlice";

export const UpdatePassword = ({ show, setShow }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { access_token: accessToken, user } = useSelector(
    (state) => state.authReducer
  );

  const [isUpdating, setIsUpdating] = useState(false);
  const [passwordCurrent, setPasswordCurrent] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  async function updatePassword() {
    let body = {
      passwordCurrent,
      password,
      passwordConfirm,
    };
    if (
      password !== passwordConfirm ||
      password == "" ||
      passwordConfirm == ""
    ) {
      toast.error("Please type the passwords correctly");
      setIsUpdating(false);
      return;
    }
    setIsUpdating(true);

    const url = BaseURL(`users/updateMyPassword`);
    const response = await Patch(url, body, apiHeader(accessToken));
    if (response !== undefined) {
      toast.success("Password updated Successfully");
      console.log(response);
      dispatch(saveLoginUserData(response.data));
      navigate("/");
      setIsUpdating(false);
    } else {
      setIsUpdating(false);
    }
  }

  return (
    <>
      <style jsx>{`
        .modal-content {
          width: 100%;
          border-radius: 20px;
          //   height: 500px;
          //   overflow-y: scroll;
        }
        .modal-body {
          padding: 1.2rem;
        }
      `}</style>
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Body>
          <div className={classes.content}>
            <h4>Update Password</h4>
            <div className={classes.mt32}>
              <Input
                type={"password"}
                placeholder={""}
                label={"Old Password"}
                value={passwordCurrent}
                setter={setPasswordCurrent}
                leftIcon={
                  <AiFillLock size="19px" color={`var(--main-color)`} />
                }
              />
            </div>
            <div className={classes.mt32}>
              <Input
                type={"password"}
                placeholder={""}
                label={"New Password"}
                value={password}
                setter={setPassword}
                leftIcon={
                  <AiFillLock size="19px" color={`var(--main-color)`} />
                }
              />
            </div>
            <div className={classes.mt32}>
              <Input
                type={"password"}
                placeholder={""}
                label={"Re-Type New Password"}
                value={passwordConfirm}
                setter={setPasswordConfirm}
                leftIcon={
                  <AiFillLock size="19px" color={`var(--main-color)`} />
                }
              />
            </div>
            <Button
              className={classes.mt32}
              customStyle={{ borderRadius: "8px", width: "100%" }}
              onClick={() => {
                updatePassword();
              }}
              disabled={isUpdating}
            >
              {isUpdating ? "Updating..." : "Update"}
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
