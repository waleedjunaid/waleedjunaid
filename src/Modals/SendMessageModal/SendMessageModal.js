import React, { useState } from "react";
import classes from "./SendMessageModal.module.css";
import { Modal } from "react-bootstrap";
import { ProfileImg } from "../../constant/imagePath";
import { StarRating } from "../../stories/StarRating";
import { MessageInputWithButton } from "../../stories/MessageInputWithButton/MessageInputWithButton";
import PropTypes from "prop-types";
import { imageUrl } from "../../config/apiUrl";

export const SendMessageModal = ({ show, setShow, data, onSend, loading }) => {
  const [message, setMessage] = useState("");
  return (
    <>
      <style jsx>{`
        .modal-content {
          width: 100%;
          border-radius: 20px;
        }
      `}</style>
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Body>
          <div className={[classes.mainDiv].join(" ")}>
            <div className={[classes.imgDiv].join(" ")}>
              <img src={`${imageUrl}${data?.photo}`} alt="..." />
            </div>
            <div>
              <p
                className={[classes.name].join(" ")}
              >{`${data?.firstName} ${data?.lastName}`}</p>
              <p className={[classes.coins].join(" ")}>
                {data?.wallet?.balance.toFixed(2)} Coins
              </p>
              <StarRating numberOfStars={5} rating={data?.ratingsAverage} />
            </div>
          </div>
          <div className={[classes.sendDiv].join(" ")}>
            <MessageInputWithButton
              state={message}
              setter={setMessage}
              onClick={() => onSend(message)}
              disabled={loading}
            />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
SendMessageModal.propTypes = {
  show: PropTypes.bool,
  setShow: PropTypes.func,
  img: PropTypes.string,
  coins: PropTypes.number,
  name: PropTypes.string,
  AverageRating: PropTypes.number,
};

SendMessageModal.defaultProps = {
  data: {
    img: ProfileImg,
    coins: 280,
    name: "Mitchell J.",
    AverageRating: 3,
  },
};
