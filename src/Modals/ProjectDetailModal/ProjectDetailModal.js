import React from "react";
import classes from "./ProjectDetailModal.module.css";
import { Modal } from "react-bootstrap";
import { FeaturedIcon, ProfileImg } from "../../constant/imagePath";
import { StarRating } from "../../stories/StarRating";
import { MessageInputWithButton } from "../../stories/MessageInputWithButton/MessageInputWithButton";
import PropTypes from "prop-types";
import { MdVerified } from "react-icons/md";
import { IoCardOutline } from "react-icons/io5";
import { Button } from "../../stories/Button/Button";
import { Tags } from "../../stories/Tags";
import { imageUrl } from "../../config/apiUrl";
import { TiGroup } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

export const ProjectDetailModal = ({
  show,
  setShow,
  data,
  HandleBookmarkResponse,
}) => {
  const navigate = useNavigate();

  return (
    <>
      <style jsx>{`
        .modal-content {
          width: 100%;
          border-radius: 20px;
          height: 500px;
          overflow-y: scroll;
        }
        .modal-body {
          padding: 1.2rem;
        }
      `}</style>
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Body>
          <div className={classes.projectDetailBox}>
            <div className={classes.cardHeader}>
              <div className={classes.imgAndTitle}>
                <img src={`${imageUrl}${data?.logo}`} alt="..." />
                <h5 className={[classes.cardHeading]}>{data?.jobTitle}</h5>
              </div>
            </div>
            <ul className={classes.details}>
              <li>
                <h6>Project Overview</h6>
                <p className={classes.overView}>{data?.description}</p>
              </li>
              <li>
                <h6>Preference Type</h6>
                <Tags
                  tags={data?.preferences}
                  customStyle={{
                    backgroundColor: "#F2F2F2",
                    fontSize: "15px",
                    padding: "10px 18px",
                    letterSpacing: "-0.45px",
                  }}
                />
              </li>
              <li>
                <h6>Detail Project</h6>
                <ul className={classes.projectInfo}>
                  <li>
                    <p className="reg">Rating</p>
                    <StarRating numberOfStars={5} rating={data?.avgRating} />
                  </li>
                  <li>
                    <p className="reg">Verified</p>
                    {data?.isVerifiedByAdmin && (
                      <span className={[classes.verifiredSpan]}>
                        <MdVerified
                          className={classes.icon}
                          size={16}
                          color={"var(--main-color)"}
                        />
                        Project Verified
                      </span>
                    )}
                  </li>
                  <li>
                    <p className="reg">No Of Candidates</p>
                    <span className={[classes.verifiredSpan]}>
                      <TiGroup
                        className={classes.icon}
                        size={16}
                        color={"var(--main-color)"}
                      />
                      {data?.noOfCandidates} Candidates
                    </span>
                  </li>
                  {data?.isFeatured && (
                    <li>
                      <p className="reg">Featured</p>
                      <span className={[classes.verifiredSpan]}>
                        <img
                          src={FeaturedIcon}
                          className={classes?.featureImage}
                        />
                        Project Featured
                      </span>
                    </li>
                  )}
                </ul>
              </li>
            </ul>
            <Button
              customStyle={{ borderRadius: "8px", width: "100%" }}
              onClick={() => navigate(`/project/${data?._id}`)}
            >
              View Details
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
ProjectDetailModal.propTypes = {
  show: PropTypes.bool,
  setShow: PropTypes.func,
  logoImg: PropTypes.string,
  coins: PropTypes.number,
  name: PropTypes.string,
  AverageRating: PropTypes.number,
};

ProjectDetailModal.defaultProps = {
  show: true,
  setShow: () => console.log(),
  data: {
    logoImg: ProfileImg,
    coins: 280,
    name: "Mitchell J.",
    AverageRating: 3,
  },
};
