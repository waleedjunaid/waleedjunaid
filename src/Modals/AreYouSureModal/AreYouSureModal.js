import React from "react";
import classes from "./AreYouSureModal.module.css";
import { Modal } from "react-bootstrap";
import { Button } from "../../stories/Button/Button";
import { FiAlertTriangle } from "react-icons/fi";

const AreYouSureModal = ({ show, setShow, data, onOffer, loading }) => {
  return (
    <>
      <style jsx>{`
        .modal-content {
          width: 100%;
          border-radius: 20px;
          overflow: hidden;
        }
        .modal-body {
          padding: 24px;
        }
        .modal-header {
          flex-direction: column;
          background: var(--main-color);
          border-bottom: none;
          padding: 0.75rem;
        }
      `}</style>
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header>
          <div className={[classes.iconDiv].join(" ")}>
            <FiAlertTriangle size={"60px"} color={"var(--white-color)"} />
          </div>
          <p className={[classes.header].join(" ")}>Are You Sure</p>
        </Modal.Header>
        <Modal.Body>
          <div className={[classes.mainDiv].join(" ")}>
            <div>
              <p className={[classes.name].join(" ")}>
                Are you sure you want to send offer to{" "}
                <span
                  style={{ color: "var(--main-color)" }}
                >{`${data?.firstName} ${data?.lastName}`}</span>
              </p>
            </div>
          </div>
          <div className={[classes.sendDiv].join(" ")}>
            <Button
              label="No"
              customStyle={{
                padding: "0",
                width: "150px",
                height: "48px",
                marginRight: "10px",
              }}
              onClick={() => setShow(false)}
            />
            <Button
              label={loading ? "Offering..." : "Yes"}
              customStyle={{
                padding: "0",
                width: "150px",
                height: "48px",
              }}
              onClick={() => onOffer(data?._id)}
            />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AreYouSureModal;
