import React from "react";
import { Modal } from "react-bootstrap";
import { imageUrl } from "../../config/apiUrl";
import { StarRating } from "../../stories/StarRating";
import NoData from "../../stories/NoData/NoData";
import classes from "./JobReviews.module.css";
import { ImCross } from "react-icons/im";

const JobReviews = ({ data, show, setShow }) => {
  return (
    <>
      <style jsx>{`
        .modal-content {
          width: 100%;
          border-radius: 20px;
          overflow: hidden;
        }
        .modal-body {
          padding: 18px;
        }
        .modal-header {
          flex-direction: column;
          background: var(--main-color);
          border-bottom: none;
          padding: 18px;
          position: relative;
        }
      `}</style>
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header>
          <div className={[classes.headerDiv]}>
            <p className={[classes.header].join(" ")}>Job Reviews</p>
            <ImCross
              size={16}
              color={"var(--white-color)"}
              onClick={() => setShow(false)}
              className={[classes.crossIcon]}
            />
          </div>
        </Modal.Header>
        <Modal.Body>
          {data?.length > 0 ? (
            data?.map((item, i) => {
              return (
                <div key={i} className={classes.jobReviewmainDiv}>
                  <div className={classes.jobReviewInnerDiv}>
                    <div className={classes.imgBox}>
                      <img
                        src={`${imageUrl}${item?.freelancer?.photo}`}
                        className={classes.img}
                      />
                    </div>
                    <div>
                      <h6 className={[classes.name]}>
                        {item?.freelancer?.firstName}{" "}
                        {item?.freelancer?.lastName}
                      </h6>
                      <StarRating
                        numberOfStars={5}
                        rating={item?.rating || 0}
                      />
                      <p className={classes.desc}>
                        <i>{item?.reviewMessage}</i>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <>
              <NoData text={"No Reviews Yet"} />
            </>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default JobReviews;
