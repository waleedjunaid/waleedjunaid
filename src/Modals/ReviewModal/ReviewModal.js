import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { MdOutlineReviews } from "react-icons/md";
import { useSelector } from "react-redux";
import { Button } from "../../stories/Button/Button";
import { StarRating } from "../../stories/StarRating";
import { TextArea } from "../../stories/TextArea";
import classes from "./ReviewModal.module.css";

const ReviewModal = ({ show, setShow, data, leaveReview, loading }) => {
  const { user } = useSelector((state) => state?.authReducer);
  const [star, setStar] = useState(null);
  const [review, setReview] = useState("");

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
          padding: 1rem;
        }
      `}</style>

      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header>
          <div className={[classes.iconDiv].join(" ")}>
            <MdOutlineReviews size={"40px"} color={"var(--white-color)"} />
          </div>
          <p className={[classes.header].join(" ")}>Leave a Review</p>
        </Modal.Header>
        <Modal.Body>
          <div className={[classes.ratingDiv]}>
            <h5>Ratings</h5>
            <StarRating
              numberOfStars={5}
              rating={star}
              setter={setStar}
              starDimension="24px"
              starSpacing="4px"
              type="submit"
            />
          </div>
          <div className={[classes.reviewDiv]}>
            <h5>Submit Review</h5>
            <TextArea
              value={review}
              setter={setReview}
              placeholder="Type here..."
              customStyle={{ padding: "12px", fontSize: "16px" }}
            />
          </div>

          {user?.role == "business" && (
            <Button
              customStyle={{
                borderRadius: "10px",
                padding: "13px 0px",
                width: "100%",
                marginTop: "32px",
                fontSize: "20px",
                fontFamily: "plus-jakarta-display-medium",
              }}
              label={loading ? "Submiting..." : "Submit"}
              onClick={() => {
                leaveReview(review, star, data?._id);
                setStar(null);
                setReview("");
                setShow(false);
              }}
              disabled={loading}
            />
          )}

          {user?.role !== "business" && (
            <Button
              customStyle={{
                borderRadius: "10px",
                padding: "13px 0px",
                width: "100%",
                marginTop: "32px",
                fontSize: "20px",
                fontFamily: "plus-jakarta-display-medium",
              }}
              label={loading ? "Submiting..." : "Submit"}
              onClick={() => {
                leaveReview(review, star);
                setStar(null);
                setReview("");
                setShow(false);
              }}
              disabled={loading}
            />
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ReviewModal;
